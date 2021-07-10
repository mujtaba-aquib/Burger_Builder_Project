/*
 * File: Summary.js
 * Created: Saturday, 10th July 2021 8:12:39 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 8:20:51 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react'

const Summary = props => {

    const ingrdientsSummary = props.ingredients.map(item => {
        return (
            <li key={ item.type}>
                <span style={{
                    textTransform: 'capital',
                }}>{item.type}</span>:{item.amount}
            </li>
        )
    })

    return (
        <div>
            <p>{ingrdientsSummary}</p>
        </div>
    )
}
export default Summary;