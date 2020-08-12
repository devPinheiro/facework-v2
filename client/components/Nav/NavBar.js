import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px soid blue;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    color: blue;

    .logo {
        padding: 15px 0;

        a {
            text-decoration: none;
            color: blue;
            font-size: 35px;

        }
    }
    @media (max-width: 760px) {
        .logo {
            a {
                font-size: 20px;
            }
        }
    }
    
`


const NavBar = () => {
    return (
        <Nav>
            <div className="logo">
                <a href="/">facework</a>
            </div>
            <Burger />
        </Nav>
    )
}




export default NavBar
