/*
 * File: ingredient.js
 * Created: Thursday, 8th July 2021 12:31:23 am
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Thursday, 8th July 2021 1:22:13 am
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */
import React from 'react';
import BreadTop from '../../../assets/Images/top.png';
import BreadBottom from '../../../assets/Images/bottom.png';
import Meat from '../../../assets/Images/meat.png';
import Salad from '../../../assets/Images/salad.png';
import Cheese from '../../../assets/Images/cheese.png';

import './ingredient.css';

const Ingredient = props => {

    let ingredients = null;
    console.log("Props call: ",props.type);
    switch (props.type) {
        case 'top':
            ingredients = <div> <img src={BreadTop} alt="Top Bread" /> </div>
            console.log("Ingredients call: ", props.type);
            break;
        case 'bottom':
            ingredients = <div> <img src={BreadBottom} alt="Bottom Bread" /> </div>
            break;
        case 'meat':
            ingredients = <div> <img src={Meat} alt="Meat" /> </div>
            break;
        case 'salad':
            ingredients = <div> <img src={Salad} alt="Salad" /> </div>
            console.log("Ingredients call: ", props.type);
            break;
        case 'cheese':
            ingredients =<div> <img src={Cheese} alt="Cheese" /> </div>
            break;
        default:
            ingredients = null;
            break;
    }
    return (
        <div className="Ingredients">
            {ingredients}
        </div>
    )
}

export default Ingredient;