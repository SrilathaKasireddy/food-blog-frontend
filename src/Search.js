import React, { useState ,useEffect }from 'react';

import './App.css';
import { API } from './global';
import {ItemCard} from "./itemcard"


 export default function Search() {
    const[itemInfo,setitemInfo]=useState([]);
    const [token,setToken]=useState(localStorage.getItem("token"));

    function getItemAPI(){
        fetch(`${API}/items`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json',
            'x-auth-token': `${token}`, 
            
        },
        })
        .then((data)=>data.json())
        .then((mvs)=>setitemInfo(mvs))
        
      }
    
      useEffect(()=>{
        getItemAPI();
      },[]);
    // the value of the search field 
    const [item, setItem] = useState('');
   
  
    // the search result
    const [foundItems, setFoundItems] = useState(itemInfo);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {

        const results = itemInfo.filter((item) => {
          return item.namee.toString()
                .toLowerCase()
                .indexOf(keyword.toLowerCase()) > -1  

          // return item.namee.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundItems(results);
      } else {
        setFoundItems(itemInfo);
        // If the text field is empty, show all users
      }

       setItem(keyword);
    };
  
    return (
      <div className="container">
        <input
          type="search"
          value={item}
          onChange={filter}
          className="input"
          placeholder="Filter"
        />
  
        <div className="user-list"  id="container-main" style={{ display: "flex", flexWrap: "wrap" }}>
          {foundItems && foundItems.length > 0 ? (
            foundItems.map((item) => (
                <ItemCard key={item._id} id={item._id} 
                img={item.imgg} name={item.namee} rating={item.ratingg} 
                                  // content={value.contentt} 
                                  method={item.method}
                                  itminf={itemInfo} 
                                  setitemInfo={setitemInfo} 
                                  getItemAPI = {getItemAPI} />
            ))
          ) : (
            <h1></h1>
          )}
        </div>
        <div  className="itemsList" >
    
      {/* {itemInfo.map((value, index) => {
        return <ItemCard key={value._id} id={value._id} 
        img={value.imgg} name={value.namee} rating={value.ratingg} 
                          // content={value.contentt} 
                          method={value.method}
                          itminf={itemInfo} 
                          setitemInfo={setitemInfo} 
                          getItemAPI = {getItemAPI} />;
      })}
       */}
    </div>
      </div>
    );
  }
  
  
//  function Items() {
  
//     const[itemInfo,setitemInfo]=useState([]);
//     const [token,setToken]=useState(localStorage.getItem("token"));
  
//     function getItemAPI(){
//       fetch(`${API}/items`, {
//         method: "GET",
//         headers: {
//           'Content-type': 'application/json',
//           'x-auth-token': `${token}`, 
          
//       },
//       })
//       .then((data)=>data.json())
//       .then((mvs)=>setitemInfo(mvs))
      
//     }
  
//     useEffect(()=>{
//       getItemAPI();
//     },[]);


