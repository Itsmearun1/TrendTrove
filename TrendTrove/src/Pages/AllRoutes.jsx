import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Notfound from './Notfound';
import Checkout from './Checkout';
import Cart from './Cart';
import Signin from './Signin';
import Signup from './Signup';
const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='signin' element={<Signin/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='products' element={<Products/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='products/:id' element={<SingleProduct/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
    </Routes>
  )
}

export default Allroutes