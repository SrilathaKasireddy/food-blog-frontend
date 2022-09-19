import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "../global"
import React  from 'react';

export function ItemCard({ img, name, id, getItemAPI }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div id="container-main" style={{ display: "flex", flexWrap: "wrap" }}>
      <Card   style={{ margin: 10, width: 350, 
                backgroundColor: "#E7FFF2",display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }} >
        <img  onClick={() => {
                  navigate(`/items/${id}`);
                }}  style={{
          width: '100%', height: 300,
          objectFit: "cover"
        }} className="itemImage" src={img} alt={name} />
        <CardContent>
          <div className="itemCredentials">
            <span className="itemName">{`${name}`}
              {/* <IconButton
                aria-label="Item Details"
                size="small"
                className="infoIcon"
                color="primary"
                onClick={() => {
                  navigate(`/items/${id}`);
                }} >
                <InfoIcon />
              </IconButton> */}
            </span>
          </div>
        </CardContent>
        <div>
          <IconButton
            aria-label="Item Edit"
            style={{ margin: "auto", padding: "20px" }}
            className="editIcon"
            color="secondary" onClick={() =>
              navigate(`/items/edit/${id}`)}>
            <EditIcon />
            <h6>Edit</h6>
          </IconButton>
          <IconButton
            aria-label="Item Delete"
            style={{ margin: "auto" }}
            className="deleteIcon"
            color="error" onClick={() => {
              fetch(`${API}/items/${id}`, {
                method: "DELETE",
                headers: {
                  'Content-type': 'application/json',
                  'x-auth-token': `${token}`,
                },
              })
                .then(() => getItemAPI());
            }}>
            <DeleteIcon />
            <h6>Delete</h6>
          </IconButton>
        </div>
      </Card>
    </div>
  );
}