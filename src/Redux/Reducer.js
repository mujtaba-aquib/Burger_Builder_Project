/*
 * File: Reducer.js
 * Created: Saturday, 10th July 2021 8:41:59 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Monday, 12th July 2021 11:15:24 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import * as actionTypes from './ActionType';

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

    const ingredient = [...state.ingredients];

    switch (action.type) {

        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredient) {
                if (item.type === action.payload)
                    item.amount++;
            }
            return {
                ...state,
                ingredients: ingredient,
                totalPrice: state.totalPrice+ INGREDIENT_PRICE[action.payload],
            }

        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredient) {
                if (item.type === action.payload) {
                    if (item.amount <= 0)
                        return state;
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredients: ingredient,
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload],
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredients.reduce((sum, element) => {
                return sum + element.amount
            }, 0);
            return {
                ...state,
                purchasable: sum>0,
            }
        default:
            return state
    }
}