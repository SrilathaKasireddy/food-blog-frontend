import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../global";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import React  from 'react';
import CommentCard from "../components/commentsCard"

const formValidationSchema = yup.object({
  //  UserName: yup.string(),
  Comment: yup.string().required("Please add comment"),
}
);
export default function CommentAdditionForm() {
    
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
       UserName:Username,
      Comment: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => AddCommentAPI(values)
  })
  
  function AddCommentAPI(newComment) {
    console.log(newComment,'opiu')
    fetch(`${API}/comments`,
      {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`
        }
      }
    ).then(() => navigate(``))
  }
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <form onSubmit={handleSubmit} style={{ padding: "5%" }} >
        <h1>Leave a Comment </h1> 
         <br/>
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
          onClick={() => window.location.reload(false)} variant="filled" type="submit"

        >  Add Comment</Button>
      </form>
    </Grid>

  );
}