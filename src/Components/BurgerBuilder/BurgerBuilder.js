/*
 * File: BurgerBuilder.js
 * Created: Wednesday, 7th July 2021 9:14:46 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Monday, 12th July 2021 11:17:05 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */


import React, { Component} from 'react';
import Burger from './Burger/Burger.js';
import Control from './Controls/Control.js';
import Summary from './Summary/Summary.js'

import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { addIngredient, removeIngredient, updatePurchasable } from '../../Redux/ActionCreator'


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingType) => dispatch(addIngredient(ingType)),
        removeIngredient: (ingType) => dispatch(removeIngredient(ingType)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }
}



class BurgerBuilde extends Component {

    state = {
        modalOpen: false,
    }

    addIngredientHandler = type => {
        this.props.addIngredient(type);
        this.props.updatePurchasable();

    }

    removeIngredientHandler = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchasable();
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
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable}
                    />
                    <Burger ingredients={this.props.ingredients} />
                </div>
                <Modal isOpen={ this.state.modalOpen}>
                    <ModalHeader
                        style={{
                            backgroundColor: "#D70F64",
                            color: "white",
                        }}
                    >Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h6>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h6>
                        <Summary ingredients={this.props.ingredients}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick = {this.checkoutHandler}>Continue to CheckOut</Button>
                        <Button color="secondary" onClick = {this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilde);