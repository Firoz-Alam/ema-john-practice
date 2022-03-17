import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    
    const [user,setUser] = useState([]);
    const [cart,setCart] = useState([]);
   
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setUser(data.slice(0,10)));
    },[]);
    
    const handleAddProduct = (product)=>{
        console.log("Product added",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    user.map(data => <Product addPro = {handleAddProduct} product = {data}></Product>)
                }
          </div>
           
           <div className="card-container">
           <Cart cart = {cart}></Cart>
               </div>
            
        </div>

    );
};

export default Shop;