import React, { createContext, useEffect, useState } from "react";
//import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product, setAll_Product] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
            .then((response) => response.json())
            .then((data) => { setAll_Product(data) })


        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getuser', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: ""
            })
                .then(response => response.json())
                .then(data => setCartItems(data))
        
        }
    }, [])

    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Itemid": itemId }),
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Itemid": itemId }),
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }

   const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const product = all_product.find((p) => String(p.id) === itemId);
      if (product && product.newprice) {
        totalAmount += product.newprice * cartItems[itemId];
      }
    }
  }
  return totalAmount;
};


    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };


    console.log(cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;