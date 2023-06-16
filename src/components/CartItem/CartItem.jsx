import React, { useContext } from "react";
import {BsCartDashFill} from 'react-icons/bs'
import './CartItem.css'
import formatCurrency from "../util/FormatCurrency";
import AppContext from "../context/AppContext";

function CartItem({data}){
  const {cartItems , setCartItems} = useContext(AppContext)
  const {id , thumbnail , title , price} = data


  const handleRemove = () => {
    const remove = cartItems.filter((ev)=> ev.id !== id)
    setCartItems(remove)
  }

  return (
      <section className="cart-item">
        <img src={thumbnail} 
        alt="image-item" 
        className="cart-item-image"/>
        <div className="cart-item-content">
          <h3 className="cart-item-title">
            {title}
          </h3>
          <h3 className="cart-item-price">
           {formatCurrency(price)}
          </h3>
          <button type="button" className="button__remove-item" 
          onClick={handleRemove}
          >
            <BsCartDashFill/>
          </button>
        </div>
      </section>
  )
}

export default CartItem