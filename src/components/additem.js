import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { API } from "../global";
import { Grid } from "@material-ui/core";
import React  from 'react';
import Paper from '@mui/material/Paper';

const formValidationSchema = yup.object({
 namee: yup.string().required("Please add name"),
 imgg: yup.string().required("Please add image source"),
 contentt: yup.string().required("Please add summary").min(20, "Minimum 20 characters"),
}
);
export default function ItemAdditionForm() {
 const navigate = useNavigate();
 const [token, setToken] = useState(localStorage.getItem("token"));
 const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
  initialValues: {
   namee: "",
   imgg: "",
   contentt: ""
  },
  validationSchema: formValidationSchema,
  onSubmit: (values) => AddItemAPI(values)
 })
 function AddItemAPI(newItem) {
  fetch(`${API}/items`,
   {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
     "Content-Type": "application/json",
     "x-auth-token": `${token}`
    }
   }
  ).then(() => navigate("/items"))
 }
 return (
  <Paper elevation={10} style={{ minHeight: "100vh", margin: 40, backgroundColor: "#DEF7EA" }}>
   <Grid container direction="column" alignItems="center" justify="center">
    <form onSubmit={handleSubmit} style={{ padding: "5%" }} >
     <TextField
      error={touched.namee && errors.namee}
      label="Name"
      variant="filled"
      name="namee"
      value={values.namee}
      onChange={handleChange}
      onBlur={handleBlur}
      style={{ padding: "2%" }}
      helperText={touched.namee && errors.namee} />
      <br/>
     <TextField
      error={touched.imgg && errors.imgg}
      style={{ padding: "2%" }}
      label="Image"
      variant="filled"
      name="imgg"
      value={values.imgg}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.imgg && errors.imgg} />
      <br/>
     <TextField
      error={touched.contentt && errors.contentt}
      style={{ margin: "2%" }}
      label="Description"
      variant="filled"
      className="summary input"
      name="contentt"
      value={values.contentt}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.contentt && errors.contentt} />
      <br/>
      <br/>
     <Button style={{ backgroundColor: "#277970", color: "white" }}
      variant="filled" type="submit"
     >Add Item</Button>
    </form>
   </Grid>
  </Paper>
 );
}

