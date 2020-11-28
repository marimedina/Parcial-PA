import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import Footer from './Components/UI/Footer';
import Header from './Components/UI/Header';


function App() {

  return (
    <>
      <Header titulo='Landing page'/>
      
      <SearchBar/>

      <ProductList/>
      

      <Footer/>
      

    </>
  );
}

export default App;
