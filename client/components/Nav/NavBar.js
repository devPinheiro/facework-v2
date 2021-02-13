import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classJoin from 'classnames';
import { FiBell } from "react-icons/fi";
import styled from 'styled-components';
import { RiDiscussLine } from "react-icons/ri";
import NotificationTray from '../NotificationTray';
import onClickOutside from "react-onclickoutside";



const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    .nav {
       
        
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
`;

const Navbar = () => {
  const [isVisible, changeVisibility] = useState(false);
  const classToggle = classJoin({
    block: isVisible,
    hidden: !isVisible,
  });
  const [openNotification, setOpenNotification] = useState(false)
  const [showNotificationBadge, setNotificationBadge] = useState(true)
  Navbar.handleClickOutside = () => setOpenNotification(false)

  return (
    <nav className="flex items-center justify-between  bg-white-500 pt-5 z-40 pb-8">

      <div className="flex items-center flex-shrink-0 text-dark mr-6">
        <Link to="/" className="text-3xl text-black no-underline">
          facework
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border navToggler rounded text-dark-200 border-dark-500 hover:text-dark hover:border-dark"
          onClick={() => changeVisibility(!isVisible)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="navLink"
        className={`${classToggle} w-full block lg:visible xl:visible lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex text-sm text-center m-auto pt-8 lg:pt-1 xl:pt-1">
       
          <NavLink
            className="font-raleway block md:text-base lg:text-base xl:text-base text-sm lg:mr-8 mt-4 lg:inline-block lg:mt-0 text-black no-underline text-dark-200 hover:text-dark"
            to="/feeds"
            exact
            activeClassName="border-orange-500 font-semibold pb-1 border-b-2"
          >
            Home
          </NavLink>
          <NavLink
            className="font-raleway block md:text-base lg:text-base xl:text-base lg:mr-8 mt-4 lg:inline-block lg:mt-0 text-black no-underline hover:text-dark"
            to="/jobs"
            activeClassName="border-orange-500 font-semibold pb-1 border-b-2"
          >
            Jobs
          </NavLink>

          <NavLink
            className="font-raleway block   md:text-base lg:text-base xl:text-base lg:mr-8 mt-4 lg:inline-block lg:mt-0 text-black no-underline text-dark-200 hover:text-dark"
            to="/messages"
            exact
            activeClassName="border-orange-500 font-semibold pb-1 border-b-2"
          >
           Chats
          </NavLink>
          <UL>
            <NavLink to="#" className="nav px-2 cursor-pointer" onClick={() => setOpenNotification(!openNotification)}>
              
                    <FiBell />
                    {showNotificationBadge ? <div className="bg-red rounded-full notify-badge h-2 w-2"></div> : null }
                  
            </NavLink>
          </UL>
          
          <NotificationTray openNotification={openNotification} setOpenNotification={setOpenNotification} />
        </div>
      </div>
    </nav>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside
};


export default onClickOutside(Navbar, clickOutsideConfig)


