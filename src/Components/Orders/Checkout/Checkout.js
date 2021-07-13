/*
 * File: Checkout.js
 * Created: Saturday, 10th July 2021 7:13:04 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Wednesday, 14th July 2021 12:23:59 am
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';
import { Component } from 'react';
import { Button, FormGroup, Form, Input } from 'reactstrap';




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
    // goOrders = () => {
    //     this.props.history.goOrders("../orders");
    // }


    inputChangeHandle = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value,
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.values);
        // document.querySelector('Input').value.reset();

        document.querySelector('#inputTextarea').value = '';
        document.querySelector('#inputPhone').value = '';
        document.querySelector('#inputSelect').value = 'Cash on Delivery';
    }

    render() {

        return (
            <div >
                <Form onSubmit={(e) => this.submitHandler(e)}
                    style={{
                    border: "5px solid #D70F64",
                    boxShadow: "8px 8px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                }} id="submitForm">
                    <h5 style={{
                        fontFamily: "cursive",
                        fontSize: "25px",
                        fontWeight: "bold",
                    }}>Check-Out Your Orders</h5>
                    <FormGroup>
                        <Input id="inputTextarea" type="textarea" name="addresses" value={this.state.values.addresses}
                            className="form-control" placeholder="Your Address..!"
                            onChange={(event) => this.inputChangeHandle(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input id="inputPhone" name="phone" value={this.state.values.phone}
                            className="form-control"
                            placeholder="Your Phone Number..!"
                            required
                            onChange={(event) => this.inputChangeHandle(event)} />
                    </FormGroup>
                    <FormGroup>
                        <Input id="inputSelect" type="select" name="paymentType" className="form-control"
                            value={this.state.values.paymentType}
                            onChange={(event) => this.inputChangeHandle(event)}>
                            <option name="cash on delivary">Cash On Delivary</option>
                            <option name="bkash">bKash</option>
                            <option name="roket">Roket</option>
                            <option name="nogod">Nogod</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="mr-auto"
                        style={{ backgroundColor: "#D70F64" }}>Place Order</Button>
                    <Button className="ml-2" color="secondary"
                        onClick={this.goBack}>Cancel</Button>
                </Form>
            </div>
        )
    }
}

export default Checkout;