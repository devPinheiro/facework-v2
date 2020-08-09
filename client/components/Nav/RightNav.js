import React from 'react'
import styled from 'styled-components';
import { RiDiscussLine } from "react-icons/ri";
import SearchForm from './SearchForm';


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    .nav {
        padding: 18px 10px;
        
        a {
            text-decoration: none;
            color: blue;
            font-size: 25px;

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
    return (
        <Ul open={open} >
        <div className="nav"><a href="">Home</a></div>
        <div className="nav"><a href="">jobs</a></div>
        <div className="nav"><a href="">profile</a></div>
        <div className="nav"><a href=""><RiDiscussLine /></a></div>
        <SearchForm className="nav" />
    </Ul>

    )
}

export default RightNav
