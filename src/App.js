import React from 'react';
import { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import LoginPage from './components/loginpage/LoginPage';
import Footer from './components/footer/Footer'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/products/Products'
import Accounts from './components/accounts/Accounts'
import AddProduct from './components/products/AddProduct';
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false)
  axios
    .get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    .then(res => localStorage.setItem('data', JSON.stringify(res.data)))
    .catch(err => console.log(err))


  // console.log(JSON.parse(localStorage.getItem('data')))

  return (
    <>
      <Router>
        <Header isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route exact path='/' element={<LoginPage isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route exact path='/dashboard' element={isloggedIn ? <Dashboard /> : <Navigate replace to={"/"} />}></Route>
          <Route exact path='/products' element={isloggedIn ? <Products /> : <Navigate replace to={"/"} />}></Route>
          <Route exact path='/accounts' element={isloggedIn ? <Accounts /> : <Navigate replace to={"/"} />}></Route>
          <Route exact path='/loginPage' element={<LoginPage isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route exact path='/addproducts' element={<AddProduct />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
