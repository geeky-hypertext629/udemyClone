import React from 'react';
import Header from './components/Header/Header';
import UpperBox from "./components/UpperBox/UpperBox.js"
import FloatingBox from "./components/FloatingBox/FloatingBox.js"
import MainBody from "./components/MainBody/MainBody.js";
import Footer from "./components/Footer/Footer.js";


const App = () => {
  return (
    <>
    <Header />
    <UpperBox />
    <FloatingBox/>
    <MainBody />
    <Footer />
    </>
  )
}

export default App
