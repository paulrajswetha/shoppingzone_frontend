import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItem = () => {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    

    return (

        <div className='cartitem'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cartitem-format cartitem-format-main">
                            <img src={e.image} alt="" className='carticon-producticon' />
                            <p>{e.name}</p>
                            <p>${e.newprice}</p>
                            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                            <p>${e.newprice * cartItems[e.id]}</p>
                            <img onClick={() => { removeFromCart(e.id) }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAV9JREFUSEvd0zFLlXEUx/HPFRvDd+FbUNBKxUQMqs1AQlBRwdmlN+DiFohoLVlBYENDY7W4OOjQ5CKOLi5iL8DnxP/CU9z7/P94uYvP9sA539/5/87vtPTxa/WR7X7Ch3BdaFvH2m62zOALZnGcEXiFtxjFeb22G/xDVfgaN3jaILCAjwm4ie0S+CC+4jn+YLqDQEz8mb+hCGjA//ma0vK/wJNK7DR1Z8FRl4tiXSCWO1VNO5ybuD1+Dh51IXCIF2kHD1PzFt40LbsE3hb4hfEE28NaLqal8CXsYyABI0Vz1aKPep18vubxOkYQYpGiCZx0E8hN/jL5Hf0BjPxHz7v0H0t+jN+dBJrgz/AtWbGIgxog+naxiis8wllpzuNovuNButRPHSarv+ASY7goudB49jJW8L5hafUXbGCnBB5Nk5WfP3NxSzuI4/pRaksBM1+SS0uekPGsJ0CvR3Rn8VtxgjoY4nR/hAAAAABJRU5ErkJggg==" />
                        </div>
                    </div>
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>


                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code,Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem