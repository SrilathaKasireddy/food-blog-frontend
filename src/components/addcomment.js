import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../global";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import React  from 'react';

const formValidationSchema = yup.object({
  //  UserName: yup.string().required("Please add name"),
  Comment: yup.string().required("Please add comment"),
}
);
export default function CommentAdditionForm() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      //  UserName:"",
      Comment: "",
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
    ).then(() => navigate("/items"))
  }
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <form onSubmit={handleSubmit} style={{ padding: "5%" }} >
        <h1>Leave a Comment</h1>
        {/* <TextField
      error={touched.UserName && errors.UserName}
      style={{ padding: "2%" }}
      label="UserName"
      variant="filled"
      className="username input"
      name="UserName"
      value={values.UserName}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.UserName && errors.UserName} /> */}
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
          variant="filled" type="submit"

        >  Add Comment</Button>
      </form>
    </Grid>

  );
}