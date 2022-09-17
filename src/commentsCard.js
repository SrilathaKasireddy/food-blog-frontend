import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "./global"
import "./App.css"
export default  function CommentCard({ UserName, Comment,_id, id, getCommentAPI }) {
const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // let token = localStorage.getItem('token')
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

console.log(token)
if (token) 
  var Username = parseJwt(token).UserName
  console.log(Username)
  


  return (
    <div id="containermain">
      <Card  style={{ backgroundColor: "whitesmoke", textAlign: "center", justifyContent: "center" }}>
        
        {/* <CardContent> */}
          <div className="Credentials">
          
            <span>PostedBy</span> <span style={{color:"green",backgroundColor:"white"}}>
            {Username}</span>
            
            <div id="comment">{`${Comment}`}
            <IconButton
            aria-label="Item Delete"
            style={{ margin: "auto" }}

            className="deleteIcon"

            color="error" onClick={() => {
              fetch(`${API}/comments/${id}`, {
                method: "DELETE",
                headers: {
                  'Content-type': 'application/json',
                  'x-auth-token': `${token}`,

                },
              })
                .then(() => getCommentAPI());
            }}>
            <DeleteIcon />
            <h6 style={{fontFamily:"roboto"}}>Delete</h6>
          </IconButton>

            </div>
              
           
          
          </div>
          

        {/* </CardContent> */}
        <div>

          {/* <IconButton
            aria-label="Comment Edit"
            style={{ margin: "auto",padding:"20px" }}
            className="editIcon"
            color="secondary" onClick={() =>
              navigate(`/comments/edit/${id}`)}>
            <EditIcon />
            <h6>Edit</h6>
          </IconButton> */}



        </div>
      </Card>
    </div>


  );

}