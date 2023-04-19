import React, { useContext } from "react"
import { data } from "../data"
import { ShopContext } from "../Context/Shop-Context"
import { CartItem } from "../components/cartItem/cartItem"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const Navigate = useNavigate()
    return (
        <CartBox>
            <div>
                <h1>Your cart items</h1>
            </div>
            <CartItems>
                {data.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </CartItems>
            {totalAmount > 0 ? (
                <div className="Checkout">
                    <p>Subtotal:${totalAmount}</p>
                    <button onClick={() => Navigate("/")}>Continue Shopping</button>
                    <button>Buy</button>
                </div>
            ) : (<h1> Your Cart is Empty</h1>
            )}
        </CartBox>
    )
}
const CartBox = styled.div`
width:100%;
align-items:center;
display:flex;
flex-direction:column;
gap:20px;
`
const CartItems = styled.div`
display:flex;
flex-direction:column;
gap:20px;
align-items:center;`
export { Cart }