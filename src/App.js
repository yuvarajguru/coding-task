import React, { Component, useEffect, useState } from 'react';
//import logo from './logo.svg';
//import MovieList from './MovieList';
import axios from 'axios'
import Table from './table';
import Search from './Search';
import './App.css';

function App (){
  return(
    <div className="App">
      <p>welcome to mealDB</p>
        <Search/>
        <Table/>

    </div>
  )
}

export default App;
