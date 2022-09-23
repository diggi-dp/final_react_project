import React from 'react';
import { useState,useEffect } from 'react'
import './App.css';
import Header from './components/header/Header';
import LoginPage from './components/loginpage/LoginPage';
import Footer from './components/footer/Footer'
import Dashboard from './components/dashboard/Dashboard'
import ProductTable from './components/products/ProductTable';
import Accounts from './components/accounts/Accounts'
import AddProduct from './components/products/AddProduct';
// import axios from "axios";
import { getApiData } from "./index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";




function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false)

  // const getdata = ()=>{
  //   axios
  //     .get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
  //     .then(res => localStorage.setItem('data', JSON.stringify(res.data)))
  //     .catch(err => console.log(err))
  // }

  // useEffect(()=>{
  //   getdata();
  // },[])

  const getdata = () => {
    getApiData()
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data))
      })
      .catch((err) => {
        return err
      });
  };

  useEffect(()=>{
    getdata();
  },[])
    

  return (
    <>
      <Router>
        <Header isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route exact path='/' element={<LoginPage isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route exact path='/dashboard' element={isloggedIn ? <Dashboard /> : <Navigate replace to={"/"} />}></Route>
          <Route exact path='/products' element={isloggedIn ? <ProductTable /> : <Navigate replace to={"/"} />}></Route>
          <Route exact path='/accounts' element={isloggedIn ? <Accounts /> : <Navigate replace to={"/"} />}></Route>
          <Route exact path='/loginPage' element={<LoginPage isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route exact path='/addproducts' element={isloggedIn ? <AddProduct /> : <Navigate replace to={"/"} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
