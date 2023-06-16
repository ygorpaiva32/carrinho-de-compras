import React, { useContext, useEffect} from 'react'
import './Products.css'
import fetchProducts from '../api/fetchProducts'
import Productcard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../context/AppContext'

function Products(){
  const {product , setProduct , loading , setLoading} = useContext(AppContext)
  
  
  useEffect(()=> {
    fetchProducts('iphone').then((response)=> {
      setProduct(response)
      setLoading(false)
    })
  }, [])


  return (
    (loading ? <Loading/> : 
    <section className="products container">
      {product.map((products)=> <Productcard key={products.id} data={products} />)}
    </section>
    
    )
     
       
  )
}

export default Products