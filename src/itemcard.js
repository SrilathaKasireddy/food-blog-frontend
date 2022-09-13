import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Counter } from './Counter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "./global"








export function ItemCard({ img, name, rating, content, id, getItemAPI }) {
 const styles = {
  color: rating > 8 ? "green" : "red"
 };
 const [show, setShow] = useState(true);
 const paraStyles = {
  display: show ? "block" : "none"
 };
 const navigate = useNavigate();
 const [token,setToken]=useState(localStorage.getItem("token"));
 return (



  <div id ="container-main" style={{ display: "flex", flexWrap: "wrap" }}>


   <Card  style={{  margin:10, width: 350, backgroundColor: "#AFFBEF", display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }} >

    <img style={{ width: '50%', height: 300, objectFit: "contain" }} className="itemImage" src={img} alt={name} />


    <CardContent>
     <div className="itemCredentials">
      <span className="itemName">{`${name}`}
       <IconButton
        aria-label="Item Details"
        size="small"
        className="infoIcon"
        color="primary"
        onClick={() => {
         navigate(`/items/${id}`);
        }} >
        <InfoIcon />
       </IconButton>

       {/* <IconButton
        aria-label="Item summary"
        size="small"
        color="primary"
        onClick={() => {
         return setShow(!show);
        }} >
        {show ? <KeyboardControlKeyIcon /> : <ExpandMoreIcon />}
       </IconButton> */}

      </span>
      {/* <span style={styles} className="itemRating">⭐ {rating} </span> */}
     </div>
     <div style={paraStyles} className="itemDescription">{content}</div>
    </CardContent>

    {/* <Counter /> */}
    <div>
     <IconButton
      aria-label="Item Edit"
      style={{ marginLeft: "auto" }}
      className="editIcon"
      color="secondary" onClick={() =>
       navigate(`/items/edit/${id}`)}>
      <EditIcon />
     </IconButton>
     <IconButton
      aria-label="Item Delete"
      style={{ marginLeft: "auto" }}

      className="deleteIcon"
      
      color="error" onClick={() => {
       fetch(`${API}/items/${id}`,{
         method: "DELETE" ,
        headers: {
          'Content-type': 'application/json',
          'x-auth-token': `${token}`, 
          
      },
        })
        .then(() => getItemAPI());
      }}>
      <DeleteIcon />
     </IconButton>

    </div>
   </Card>
  </div>


 );

}
