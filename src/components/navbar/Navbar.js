import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo-udemy.svg'
import { useState } from 'react';
import { GoSearch } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineShoppingCart} from "react-icons/ai";
// import { useHistory } from 'react-router-dom';

function Navbar() { 
  const [search,setSearch] = useState('')
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (search === "") {
      return;
    }
  
    // Redirect to the other React folder
    window.location.href = "http://localhost:3000/src/components/searchPage/SearchPage.js";
  };
  
  return (
    <div className='navbar flex'>
      <img src={logo} alt='logo' className='logo'/>
        <div>Categories</div>
        <div className='search flex'>
        <GoSearch />
            <form className='input-form flex' onSubmit={handleSubmit}>
            
            <input type="text" id="fname" name="fname" placeholder="search for anything" onChange={(e)=>setSearch(e.target.value)}/>
            </form>
        </div>
        <div>Udemy Buisness</div>
        <div>Teach on Udemy</div>
        
        <AiOutlineShoppingCart />
        <div className='button button-type1'>Log in</div>
        <div className='button button-type2'>Sign up</div>
        <div className='button button-type1'><BsGlobe /></div>

    </div>
  )
}

export default Navbar
