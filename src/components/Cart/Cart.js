import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=> total + prd.price , 0);

    let shifting = 0;

    if (shifting > 0) {
        shifting = 12.99;
    }else if(shifting > 15){
        shifting = 4.99;
    }else if(shifting > 35){
        shifting = 0;
    }
   
    let tax = total / 10;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const grandTotal = (total + shifting + tax).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Product Price: {formatNumber(total)}</h5>
            <h5><small>Shifting Cost: $ {formatNumber(shifting)}</small></h5>
            <h5><small>Vat + Tax : $ {formatNumber(tax)}</small></h5>
            <h5>Total Price: $ {grandTotal } <small>Include vat/tax</small> </h5>
        </div>
    );
};

export default Cart;