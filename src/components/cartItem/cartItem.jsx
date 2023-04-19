import "./CartItem.css"
import React, { useContext } from "react"
import { ShopContext } from "../../Context/Shop-Context"
const CartItem = (props) => {
    const { cartItems,addToCart,removeFromCart } = useContext(ShopContext)
    const { id, price, gameImage, name } = props.data
    return (
        <div className="cartItem">
            <img src={gameImage} />
            <div className="cart-item-description">
                <p>
                    {" "}
                    <b>{name}</b>
                </p> 
                <p> R${price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} />
                    <button onClick={()=>addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}
export { CartItem }