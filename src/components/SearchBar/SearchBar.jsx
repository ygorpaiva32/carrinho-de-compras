
import {BsSearch} from 'react-icons/bs'

import './SearchBar.css'
import { useState } from 'react'
import { useContext } from 'react'
import fetchProducts from '../api/fetchProducts'
import AppContext from '../context/AppContext'

function Search(){
  const {setProduct , setLoading} = useContext(AppContext)
  const [search, setSearch] = useState("")

  
  const handleSearch = async (ev) => {
    ev.preventDefault()
    setLoading(true)
    const data = await fetchProducts(search)
    setProduct(data)
    setLoading(false)
    setSearch('')
  }
  
  return (

   <form className='search-bar' onSubmit={handleSearch}>
   
     <input 
      type="search"
      className='search__input'    
      placeholder="Buscar produtos"
      value={search}
      onChange={({target})=> setSearch(target.value)}
      required
   />
   <button type='submit' className='search__button'>
    
    <BsSearch/> 
   </button>

   </form>
  )
}

export default Search