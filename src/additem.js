import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { Card } from "@mui/material";
import { API } from "./global";
import { Grid, Typography } from "@material-ui/core";
import Paper from '@mui/material/Paper';




const formValidationSchema = yup.object({
 namee: yup.string().required("Please add name"),
 imgg: yup.string().required("Please add image source"),
 ratingg: yup.number().required("Please add rating").max(10, "Provide rating from 1-10").min(1, "Provide rating from 1-10"),
 contentt: yup.string().required("Please add summary").min(20, "Minimum 20 characters"),

}
);


export default function ItemAdditionForm() {

 const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
  initialValues: {
   namee: "",
   imgg: "",
   ratingg: "",
   contentt: ""

  },
  validationSchema: formValidationSchema,
  onSubmit: (values) => AddItemAPI(values)
 })


 const navigate = useNavigate();
 function AddItemAPI(newItem) {
  fetch(`${API}/items`,
   {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: { "Content-Type": "application/json" }
   }
  ).then(() => navigate("/items"))

 }
 return (
  <Paper elevation={10} style={{ height: 600, margin: 40, backgroundColor: "#DEF7EA" }}>
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
     <br></br>

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
     <br></br>

     <TextField
      error={touched.ratingg && errors.ratingg}
      style={{ padding: "2%" }}
      label="Rating"
      variant="filled"
      className="rating input"
      name="ratingg"
      value={values.ratingg}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched.ratingg && errors.ratingg} />
     <br></br>
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

     <br></br>
     <br></br>

     <Button style={{ backgroundColor: "#277970", color: "white" }}
      variant="filled" type="submit"

     >  Add Item</Button>
    </form>
   </Grid>
  </Paper>
 );
}

