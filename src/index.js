import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import "./styles/global.css";
import Index from "./01-index/index";
import About from "./02-about/index";
import Work from "./03-work/index";
import Contact from "./04-contact/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBoyvdDmTBtDlSneO5QhkgLXQLCiZAvyE",
  authDomain: "courtney-portfolio-2.firebaseapp.com",
  projectId: "courtney-portfolio-2",
  storageBucket: "courtney-portfolio-2.appspot.com",
  messagingSenderId: "1014891991178",
  appId: "1:1014891991178:web:f4baf63d070da5a9bd5d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="work" element={<Work/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element="no page"/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();