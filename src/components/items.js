import { useEffect, useState } from 'react';
import { ItemCard } from './itemcard';
import { API } from '../global';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import React  from 'react';

export default function Items() {
  const [itemInfo, setitemInfo] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  function getItemAPI() {
    fetch(`${API}/items`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`,
      },
    })
      .then((data) => data.json())
      .then((mvs) => setitemInfo(mvs))
  }
  useEffect(() => {
    getItemAPI();
  }, []);
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
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundItems(results);
    } else {
      setFoundItems();
      // If the text field is empty, show all users
    }
    setItem(keyword);
  };
  function getItemAPI() {
    fetch(`${API}/items`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`,
      },
    })
      .then((data) => data.json())
      .then((mvs) => setitemInfo(mvs))
  }
  useEffect(() => {
    getItemAPI();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div id="heading-item" > <br/><b id="breakfast">
        Indian Breakfasts </b>
        <Button style={{
          backgroundColor: "#277970",
          color: "white", marginRight: "auto"
        }} variant="outlined"
          onClick={() => {
            return navigate("/home");
          }}
        > <HomeIcon />  Back to Home</Button>
        <Button style={{
          backgroundColor: "#277970", color: "white",
          margin: 10
        }} variant="outlined" onClick={() => {
          return navigate("/additems");
        }}
        >  <AddIcon />AddItem</Button>
        <input
          type="search"
          value={item}
          onChange={filter}
          className="input"
          placeholder="Search..."
          style={{
            marginRight: "80%", width: "250px", height: 40,
            border: "3px solid green"
          }}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {foundItems && foundItems.length > 0 ? (
            foundItems.map((item) => (
              <ItemCard key={item._id} id={item._id}
                img={item.imgg} name={item.namee}
                // content={value.contentt} 
                method={item.method}
                itminf={itemInfo}
                setitemInfo={setitemInfo}
                getItemAPI={getItemAPI} />
            ))
          ) : (
            <h1> </h1>
          )}
        </div>
      </div>
      <div className="itemsList" id="heading-item" >
        {itemInfo.map((value, index) => {
          return <ItemCard key={value._id} id={value._id}
            img={value.imgg} name={value.namee}
            // content={value.contentt} 
            method={value.method}
            itminf={itemInfo}
            setitemInfo={setitemInfo}
            getItemAPI={getItemAPI} />;
        })}
      </div>
    </>
  );
}