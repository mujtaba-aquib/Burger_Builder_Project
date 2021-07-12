/*
 * File: main.js
 * Created: Wednesday, 7th July 2021 9:08:54 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Monday, 12th July 2021 11:36:56 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';
import Header from './Header/Header.js';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder.js';
import Orders from './Orders/Orders.js';
import Checkout from './Orders/Checkout/Checkout'

import { Route } from 'react-router-dom';
import Footer from './Footer/Footer.js';


const MainComponent = props => {

    return (
        <div>
            <Header />
            <div className="container">
                <Route path="/orders" component={Orders}/>
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder}/>
            </div>
            <Footer/>
        </div>

    )

}
export default MainComponent;