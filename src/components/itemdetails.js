import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { API } from "../global"
import Counter from "./Counter"
import Comments from "./comments"
import Card from '@mui/material/Card';
import "../App.css"
import React  from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid } from "@material-ui/core";
import CommentCard from "../components/commentsCard"

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
        <Button style={{ backgroundColor: "#277970", margin: 10, color: "white", fontSize: 15 }} variant="outlined" onClick={() => {
          return navigate(-1);
        }}
        > <ArrowBackIosNewIcon fontSize="15" />Back</Button>
        <h1>{item.namee} Recipe</h1>
        <div id="leftbox">
          <img style={{
            width: '100%', height: 400,
            objectFit: "cover"
          }}
            className="itemImage" src={item.imgg}
            alt={item.namee} />
          <Counter />
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
      </div>
      
      <CommentAdditionForm />
     
     <Comments/>
    </div>
  )
}
{/* { postId = id ?    <CommentCard/> :  <> </> }
     {console.log(postId,"and",id)} */}




const formValidationSchema = yup.object({
  //  UserName: yup.string(),
  Comment: yup.string().required("Please add comment"),
}
);
export function CommentAdditionForm() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
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
   
    

    

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      UserName: Username,
      Comment: "",
      createdAt:new Date().toLocaleString(),
      postId:id

    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => AddCommentAPI(values)
  })

  function AddCommentAPI(newComment) {
    fetch(`${API}/comments`,
      {
        method: "POST",
        body: JSON.stringify(newComment),
        
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`
        }
      }
    )
    
      // .then(() => navigate("/items"))
      .then(() => window.location.reload())
  }
  
  

 
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <form onSubmit={handleSubmit} style={{ padding: "5%" }} >
        <h1>Leave a Comment </h1>
        <br />
        <TextField
          error={touched.Comment && errors.Comment}

          label="Comment"
          variant="outlined"
          className="comment input"
          name="Comment"
          value={values.Comment}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.Comment && errors.Comment} />
        <Button style={{ backgroundColor: "#277970", color: "white", margin: 10 }}

          variant="filled" type="submit"

        >  Add Comment</Button>
      </form>
    </Grid>

  );
}
