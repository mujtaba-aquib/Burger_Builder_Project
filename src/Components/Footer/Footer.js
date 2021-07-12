/*
 * File: Footer.js
 * Created: Monday, 12th July 2021 11:34:06 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Tuesday, 13th July 2021 1:49:55 am
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"

import './Footer.css';

const Footer = (props) => {

    return (
        <div className='footer-div'>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <div class="foot-circle">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div class="foot-circle">
                                <FontAwesomeIcon icon={faGoogle} />
                            </div>
                        </div>
                    </div>

                    <div class="row-sm-12 text-center pb-4">
                        <div class="col">
                            <p>&copy;All Rights reserve to Mujtab@2021</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Row>
                <Col>
                    <h1>Thank you </h1>
                    <h2>For Visiting Our Website</h2>
                </Col>
                <Col>
                    <h4>About Us</h4>
                    <ul>
                        <li ><a href="/">Aim</a></li>
                        <li ><a href="/">Vision</a></li>
                        <li ><a href="/">Testimonial</a></li>
                    </ul>
                </Col><Col>
                    <h4>Contact Us</h4>
                    <ul>
                        <li ><a href="/">Facebook</a></li>
                        <li ><a href="/">Twiter</a></li>
                        <li ><a href="/">Instagram</a></li>
                    </ul>
                </Col>
            </Row> */}
        </div>
    )
}

export default Footer;