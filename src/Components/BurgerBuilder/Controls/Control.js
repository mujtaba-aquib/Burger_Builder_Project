/*
 * File: Control.js
 * Created: Thursday, 8th July 2021 2:04:08 am
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Monday, 12th July 2021 11:15:05 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */


import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button,  } from 'reactstrap';


let controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },

]


const BuildControl = props => {

    return (
        <div className="d-flex " style={{
            backgroundColor: "whitesmoke",
            marginBottom: "2px",
            border: "2px solid black",
            fontSize: "1.2rem",
            fontWeight: "bold"
        }}>
            <button className="btn btn-danger btn-sm m-1 p-3" onClick={props.removed}> - </button>
            <div className="m-auto ">{ props.label}</div>
            <button className="btn btn-success btn-sm m-1 p-3" onClick={props.added}> + </button>
        </div>
    )
}



const Control = props => {

    return (
        <div className="container ml-md-5" style={{textAlign: "center"}}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#D70F64",
                    color: "white",
                }}>
                    <h4>Add Ingredients From Here</h4>
                </CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return (
                                <BuildControl label={item.label} type={item.type} key={Math.random()}
                                    added={() => props.ingredientsAdded(item.type)}
                                    removed={() => {
                                        props.ingredientsRemoved(item.type)
                                    }}
                                />)
                        })
                }
                </CardBody>
                <CardFooter style={{
                    backgroundColor: "#D70F64",
                    color: "white",
                }}><h6>Price: <strong>{props.price}</strong> BDT</h6></CardFooter>
                <Button disabled={!props.purchasable} onClick={props.toggleModal}
                    style={{
                        marginTop: "5px",
                        width: "100%"
                }}>Order Now</Button>
            </Card>

        </div>
    )
}

export default Control;