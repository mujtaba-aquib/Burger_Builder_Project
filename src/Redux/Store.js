/*
 * File: Store.js
 * Created: Saturday, 10th July 2021 8:41:49 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 8:51:29 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */


import { createstore } from 'redux';
import { reducer } from './Reducer';

export const store = createstore(reducer);