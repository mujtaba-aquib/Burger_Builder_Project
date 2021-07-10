/*
 * File: BurgerBuilder.js
 * Created: Wednesday, 7th July 2021 9:14:46 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 10th July 2021 8:29:01 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */


import React, { Component} from 'react';
import Burger from './Burger/Burger.js';
import Control from './Controls/Control.js';
import Summary from './Summary/Summary.js'

import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';


const IngredientPrice = {
    salad: 20,
    meat: 100,
    cheese: 50,
}

export default class BurgerBuilde extends Component {

    state = {
        ingredients: [
            {type: 'salad', amount: 0},
            {type: 'meat', amount: 0},
            { type: 'cheese', amount: 0 },
        ],
        totalPrice: 60,
        modalOpen: false,
        purchasable: false,
    }

    updatePurchasable = ingredients => {
        const sum = ingredients.reduce((sum, element) => {
            return sum + element.amount
        }, 0);
        this.setState({purchasable: sum>0})
    }


    addIngredientHandler = type => {
        const ingredient = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + IngredientPrice[type];
        for (let item of ingredient) {
            if (item.type === type)
                item.amount++;
        }
        this.setState({ ingredients: ingredient, totalPrice: newPrice });
        this.updatePurchasable(ingredient)
    }

    removeIngredientHandler = type => {
        const ingredient = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - IngredientPrice[type];
        for (let item of ingredient) {
            if (item.type === type) {
                if (item.amount <= 0)
                    return;
                item.amount--;
            }
        }
        this.setState({ ingredients: ingredient, totalPrice: newPrice });
        this.updatePurchasable(ingredient)
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    checkoutHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        return (
            <div>
                <div className=" d-flex flex-md-row flex-column">
                    <Control ingredientsAdded={this.addIngredientHandler}
                        ingredientsRemoved={this.removeIngredientHandler}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable= {this.state.purchasable}
                    />
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <Modal isOpen={ this.state.modalOpen}>
                    <ModalHeader
                        style={{
                            backgroundColor: "#D70F64",
                            color: "white",
                        }}
                    >Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h6>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h6>
                        <Summary ingredients={this.state.ingredients}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick = {this.checkoutHandler}>Continue to CheckOut</Button>
                        <Button color="danger" onClick = {this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

