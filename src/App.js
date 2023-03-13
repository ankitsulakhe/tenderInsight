import React, { Component, useEffect  } from 'react'
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/loginPage';
import AboutPage from './pages/about/aboutPage'; 
import './App.css';

function App() {
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loaderPre");
      if (loaderElement) {
        loaderElement.remove();
      }
    });
  });




  return (
    <div className="WebsitePage">
         <HomePage/>
        {/* <HomePage/> */}
        <div id="preloader" className='loaderPre'></div>
    </div>
  );
}

export default App;
