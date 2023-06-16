import React, { useState }  from "react";
import AppContext from "./AppContext";

function Provider({children}){
  const [product, setProduct] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartVisible , setCartVisible] = useState(false)

  const value = {
    product ,
    setProduct,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    cartVisible , 
    setCartVisible
  }
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default Provider