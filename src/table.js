
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react';
import './App.css'

export default function table() {
    const [list,setList] = useState([]);
    const [error,setError] = useState();
    const [loading,setLoading] = useState();
    //let data = [];
  
    useEffect(() =>{
      fetchdata();
        
    },[])
    const fetchdata = () =>{
      setLoading(true);
      axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
          .then((res) =>{
            setList(res.data.categories)
          })
    }
    console.log(list)
  return (
    <div className="list-table">
      
        <h2>Recepies in Table </h2>
          <table>
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Icon</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              
              {
                list.length > 0 ? (
                  list.map((item) => {
                    return(
                      <tr key={item.idCategory}>
                        <td>{item.idCategory}</td>
                        <td>{item.strCategory}</td>
                        <td><img src={item.strCategoryThumb} width="75" height="75"/></td>
                        <td>{item.strCategoryDescription}</td>
                      </tr>
                    )
                  })
                ) : ( "no items ")
                
              }
              
              
            </tbody>
          </table>
        </div>
  )
}
