// import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
        <App />

);



const url = "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json";

export const getApiData = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log(e);
    return "Error has occured";
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
