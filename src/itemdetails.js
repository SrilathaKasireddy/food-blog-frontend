import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { API } from "./global"
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';


import Card from '@mui/material/Card';
import "./App.css"
export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  function getSingleItemAPI() {
    fetch(`${API}/items/${id}`)
      .then((data) => data.json())
      .then((mv) => setItem(mv));
  }
  useEffect(() => {
    getSingleItemAPI();
  }, []);

  return (
    <div id="boxes">
      <h1>{item.namee} Recipe</h1>
      <div id="leftbox">
        <img style={{ width: '100%', objectFit: "contain" }} className="itemImage" src={item.imgg} alt={item.namee} />
        <div className="itemDescription">{item.contentt}</div>
      </div>
      <Card style={{ width: '60%', padding: '30px', margin: '30px' }}>
        <h4>Ingredients</h4>
        <p>{item.ingredients}</p>
      </Card>
      <Card style={{ width: '60%', padding: '30px', margin: '40px' }}>
        <h4>Method</h4>
        <p>{item.method}</p>
      </Card>
      <Button style={{ backgroundColor: "#277970", color: "white", }} variant="outlined"
        onClick={() => {
          return navigate(-1);
        }}
      > <ArrowBackIosNewIcon />Back</Button>


<h4>Loved  the Recipe! please <Button style={{ backgroundColor: "#277970", color: "white", }} 
variant="outlined"><ShareIcon/>Share </Button></h4>
     <h4>Share your thoughts  <Button style={{ backgroundColor: "#277970", color: "white", }} 
variant="outlined"><CommentIcon/>Comments</Button></h4>
    </div>
  )
}
