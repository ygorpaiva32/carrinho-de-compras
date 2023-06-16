import CartItem from '../CartItem/CartItem';
import AppContext from '../context/AppContext';
import formatCurrency from '../util/FormatCurrency';
import './Cart.css'
import React, { useContext } from 'react'

function Cart(){
  const {cartItems,  cartVisible}= useContext(AppContext)

  const totalPrice = cartItems.reduce((acc , item) =>{
      return item.price + acc
  } ,0)
  return (
    <section className={`cart ${cartVisible ? 'cart-active': ''}`}>
      <div className="cart-items">

      {cartItems.map((products)=> 
        <CartItem   
          key={products.id}
          data={products}

        />
      )}

      
      </div>
      <div className='cart-resume'>
      {formatCurrency(totalPrice)}
      </div>
    </section>
  )
}

export default Cart;

