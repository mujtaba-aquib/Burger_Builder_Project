/*
 * File: Checkout.js
 * Created: Saturday, 10th July 2021 7:13:04 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Monday, 12th July 2021 11:09:34 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';
import { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';


class Checkout extends Component {

    state = {
        values: {
            addresses: "",
            phone: "",
            paymentType: "Cash on Delivery",
        }
    }

    goBack = () => {
        this.props.history.goBack("/");
    }

    inputChangeHandle = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value,
            }
        })
    }

    submitHandler = () => {
        console.log(this.state.values);

    }

    render() {

        return (
            <div >
                <Form style={{
                    border: "5px solid #D70F64",
                    boxShadow: "8px 8px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                }}>
                    <h5 style={{
                        fontFamily: "cursive",
                        fontSize: "25px",
                        fontWeight: "bold",
                    }}>Check-Out Your Orders</h5>
                    <FormGroup>
                        <Input type="textarea" name="addresses" value={this.state.values.addresses}
                            className="form-control" placeholder="Your Address..!"
                            onChange={(event) => this.inputChangeHandle(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input name="phone" value={this.state.values.phone}
                            className="form-control"
                            placeholder="Your Phone Number..!"
                            required
                            onChange={(event) => this.inputChangeHandle(event)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="paymentType" className="form-control"
                            value={this.state.values.paymentType}
                            onChange={(event) => this.inputChangeHandle(event)}>
                            <option name="cash on delivary">Cash On Delivary</option>
                            <option name="bkash">bKash</option>
                            <option name="roket">Roket</option>
                            <option name="nogod">Nogod</option>
                        </Input>
                    </FormGroup>
                    <Button className="mr-auto" style={{ backgroundColor: "#D70F64" }}
                        onClick={this.submitHandler}>Place Order</Button>
                    <Button className="ml-2" color="secondary"
                        onClick={this.goBack}>Cancel</Button>
                </Form>
            </div>
        )
    }
}

export default Checkout;