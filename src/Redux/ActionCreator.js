/*
 * File: ActionCreator.js
 * Created: Saturday, 10th July 2021 8:42:10 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 9:00:21 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import * as actiontype from './ActionType';

export const addIngredient = ingType => {
    return {
        type: actiontype.ADD_INGREDIENT,
        payload: ingType,
    }
}
export const removeIngredient = ingType => {
    return {
        type: actiontype.REMOVE_INGREDIENT,
        payload: ingType,
    }
}
export const updatePurchasable = () => {
    return {
        type: actiontype.UPDATE_PURCHASABLE,
    }
}
