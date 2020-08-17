import React, { useState } from 'react'
import styled from 'styled-components';
import { RiDiscussLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import SearchForm from './SearchForm';
import NotificationTray from '../NotificationTray';


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    .nav {
        padding: 18px 10px;
        
        a {
            text-decoration: none;
            color: #000000;
            font-size: 16px;

        }
        .notify-badge {
            left: 11px;
            top: -28px;
            position: relative;
            border-radius: 100%
        }
    }

    @media (max-width: 760px) {
        flex-flow: column nowrap;
        background-color: none;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translate(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 120px;
        padding-top: 3.5rem;
        transition: 0.3s ease-in-out;

        .nav {
            color: blue;

            a {
                font-size: 20px;
    
            }
            
        }
    }
`;

const RightNav = ({ open }) => {
    const [openNotification, setOpenNotification] = useState(false)
    const [showNotificationBadge, setNotificationBadge] = useState(true)
    return (
        <Ul open={open}>
            <SearchForm className="nav" />
        <div className="nav px-2"><a href="">Home</a></div>
        <div className="nav px-2"><a href="">Jobs</a></div>
        <div className="nav px-2"><a href="" className="text-md"><RiDiscussLine /></a></div>
        <div className="nav px-2 cursor-pointer" onClick={() => setOpenNotification(!openNotification)}><FiBell />
           {showNotificationBadge ? <div className="bg-red rounded-full notify-badge h-2 w-2"></div> : null }
        </div>
        <NotificationTray openNotification={openNotification} setOpenNotification={setOpenNotification} />
    </Ul>

    )
}

export default RightNav
