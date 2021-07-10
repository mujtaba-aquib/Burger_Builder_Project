/*
 * File: Header.js
 * Created: Wednesday, 7th July 2021 9:18:06 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 7:38:08 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink} from 'react-router-dom'

import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='Navigation'>
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }}>
                <NavbarBrand href='/' className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="logo" width="90px"/>
                </NavbarBrand>
                <Nav className= "mr-md-5" >
                    <NavItem>
                        <NavLink exact to="/" className="NavLink"> Burger </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="NavLink"> Orders </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;