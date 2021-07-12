/*
 * File: Burger.js
 * Created: Thursday, 8th July 2021 12:26:18 am
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 11:19:31 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';
import Ingredients from '../Ingredeients/ingredient'
import './Burger.css';


const Burger = props => {

    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()]
        return amountArr.map(_ => {
            return <Ingredients type={item.type} key={Math.random()} />
        })
    })
        .reduce((arr, element) => {
            return arr.concat(element);
        }, []);

    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please add some ingredients..!</p>;
    }


    return (
        <div className="Burger">
            <Ingredients type='top'/>
            { ingredientArr}
            <Ingredients type='bottom'/>
        </div>
    )
}

export default Burger;