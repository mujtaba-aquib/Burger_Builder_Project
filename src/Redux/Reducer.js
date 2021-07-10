/*
 * File: Reducer.js
 * Created: Saturday, 10th July 2021 8:41:59 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 8:50:30 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

const INGREDIENT_PRICE = {
    salad: 20,
    meat: 100,
    cheese: 50,
}


const INITIAL_STATE= {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'meat', amount: 0 },
            { type: 'cheese', amount: 0 },
        ],
        totalPrice: 60,
        purchasable: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}