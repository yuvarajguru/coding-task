 import React, { useState,useEffect } from 'react';
 import axios from 'axios'
import { Button } from 'reactstrap';
import './App.css';

export default function Search() {
    const [listValue,setListValue] = useState([]);
    const [filter,setFilter] = useState("");
    const[loading,setLoading] = useState();

     useEffect(() =>{
            getData();
     },[])
      
     const getData = () =>{
        setLoading(true);
            fetch('https://fakestoreapi.com/products')
            .then(res=> res.json())
            .then((productCatagory) => {
               const productArray = productCatagory.map((product) => {
                return product.title
              })
              setListValue(productArray)
            } );
     }
    
      const handleOnChange = (event) =>{
        setLoading(true);
        setFilter(event.target.value);
        
      }
      const filterProduct = listValue.filter((productLists) =>{
        return productLists.includes(filter)
     })

     const clear = () =>{
         setFilter("")
     }
      console.log(listValue);
      //console.log(filterData)
  return (
    <div className="search-list">
        <p>Search List</p>
        <input type="text" value={filter} placeholder="search value" onChange={handleOnChange}/><br/>
        <small  class="form-text text-muted">(ex. Gold)</small>
        &nbsp;<br/>
        <Button color="danger" onClick={clear}>Clear!</Button>
        <br/>
               { filter !== "" ? (
                   filterProduct.map((item) =>{
                    return(
                        
                            <ul key={item}>
                                <li>{item}</li>
                            </ul>
                    );
                })
               ) : ( " no items there")
              
            } 
    </div>
  )
} 