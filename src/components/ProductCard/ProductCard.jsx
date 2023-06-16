import React, { useContext } from 'react'
import './ProductCard.css'
import {BsFillCartPlusFill} from 'react-icons/bs'
import formatCurrency from '../util/FormatCurrency'
import AppContext from '../context/AppContext'




function Productcard({data}){
  const { cartItems, setCartItems} = useContext(AppContext)
  const {title , thumbnail , price} = data

  
  

  const handleCart = () => setCartItems([...cartItems , data])



  return (
    <section className='product-card'>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className='card__image'/>
      
      <div className="card-infos">
        <h2 className='card__price'>{formatCurrency(price)}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>
      <button onClick={handleCart} type="button" className='button__add-cart'><BsFillCartPlusFill/></button>
    </section>
  )
}

export default Productcard