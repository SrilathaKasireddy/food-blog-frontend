import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { API } from "./global"
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import Comments from "./comments"
import CommentAdditionForm from "./addcomment"


import Card from '@mui/material/Card';
import "./App.css"
export default function ItemDetails() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  function getSingleItemAPI() {
    fetch(`${API}/items/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`,

      },
    })
      .then((data) => data.json())
      .then((mv) => setItem(mv));
  }
  useEffect(() => {
    getSingleItemAPI();
  }, []);

  return (
    <div>
      
    <div id="boxes" style={{
      backgroundColor: "#F1F7F6"
    }}>
      
      <Button onClick={() => {
          return navigate(-1);
        }} style={{marginLeft:"90%",color:"green",margin:"10px"}}>
          <ArrowBackIosNewIcon />Back</Button>
         
          
      <h1>{item.namee} Recipe</h1>

      <div id="leftbox">
        <img style={{
          width: '100%', height: 300,
          objectFit: "cover"
        }}
          className="itemImage" src={item.imgg}
          alt={item.namee} />
        <div className="itemDescription">{item.contentt}</div>
      </div>
      <Card style={{
        width: '60%', padding: '30px',
        margin: '30px', backgroundColor: "#caf6f2"
      }}>
        <h4>Ingredients</h4>
        <p>{item.ingredients}</p>
      </Card>
      <Card style={{
        width: '60%',
        padding: '30px', margin: '40px', backgroundColor: "#caf6f2"
      }}>
        <h4 >Method</h4>
        <p>{item.method}</p>
      </Card>


      
      
      {/* <h4>Loved  the Recipe!<Button style={{ backgroundColor: "green", color: "white", }}
        variant="outlined"><ShareIcon />Share </Button></h4> */}





    </div>


    <CommentAdditionForm/>
<Comments/>

</div>
  )
}
