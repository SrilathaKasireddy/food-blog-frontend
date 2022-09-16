import { Typography, Button, } from '@mui/material'
import "./App.scss";
import { Grid } from "@material-ui/core";
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Card from "@mui/material/Card"
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { API } from './global.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';


export default function Login() {
 const navigate = useNavigate();
 const [errorMsg, setErrorMsg] = useState("");
 const entry = () => navigate("/Home");

 const loginUser = (userDetail) => {
  fetch(`${API}/login`, {
   method: "POST",
   body: JSON.stringify(userDetail),
   headers: {
    "Content-Type": "application/json",
   },
  
  }).then((data) => data.json())
   .then((data1) => {
    localStorage.setItem("token",data1.token)
    if (data1.message === "successful login") {
     entry();
    }
    else {
     setErrorMsg(data1.message);
    }
   });


 };

 const initialValues = {
  UserName: '',
  Password: '',
 }
 const userValidationSchema = Yup.object({
  UserName: Yup.string().required('Required'),
  Password: Yup.string().required('Required'),
 })

 const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
  initialValues: initialValues,
  validationSchema: userValidationSchema,
  onSubmit: (userDetail) => {
   console.log("onSubmit", userDetail);
   loginUser(userDetail);
  },
 });

 return (
  <Paper elevation={10} style={{ height: 700, width: "100%", backgroundColor: "#B2ECCF" }}>
   <Grid container direction="column" alignItems="center" justify="center"
    style={{ backgroundColor: "#DEF7EA", height: 700, width: "60%", padding: "10%" }}

   >
    <form onSubmit={handleSubmit}  >


     <TextField
      className="username"
      InputProps={{ style: { fontSize: 15 } }}
      InputLabelProps={{ style: { fontSize: 15 } }}
      label="User Name"
      type="text"
      value={values.UserName}
      name="UserName"
      style={{ padding: 5 }}
      variant="standard"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.UserName && errors.UserName ? true : false}
      helperText={touched.UserName && errors.UserName ? errors.UserName : ""}
     />
     <br></br>

     <TextField
      InputProps={{ style: { fontSize: 15 } }}
      InputLabelProps={{ style: { fontSize: 15 } }}
      className="password"
      label="Password"
      type="password"
      variant="standard"
      value={values.Password}
      name="Password"
      style={{ padding: 5 }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.Password && errors.Password ? true : false}
      helperText={touched.Password && errors.Password ? errors.Password : ""}
     />
     <br></br>
     <br></br>
     <button type="submit"
      className="btn btn-success" style={{ height: 40, width: 60, fontSize: 15 }}>Login</button>
     <br></br>
     <br></br>
     <div className="text-center" style={{ color: "red" }}>
      {errorMsg}
     </div>
     <div className="text-center" style={{ color: "", padding: 5 }} >
      <h4>Don't have an account? <Link to="/Register"><button type="submit"
       className="btn btn-success" style={{ height: 40, width: 65, fontSize: 15 }}>Signup</button></Link></h4>
      <br></br>
      <br></br>
      <Link to="/ForgetPassword"><button type="submit"
       className="btn btn-success" style={{ height: 40, width: 200, fontSize: 15 }}>Forgotten your password?</button></Link>
     </div>

    </form>
    <div  className="example">
     <div className="content" >
      <div className="broccoli">
       <div className="broccoliTop">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       </div>
       <div className="dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>


       </div>

       <div className="broccoliTale">
        <span></span>
        <span></span>
        <span></span>
       </div>
       <div className="face">
        <span className="eye"></span>
        <span className="eye"></span>
        <span className="mouth"></span>
       </div>
      </div>
     </div>
    </div>
 <h1> <span className="wave">👋</span>Welcome!</h1>
<h5>   Simply Recipies is a food blog.</h5>
   </Grid>
  </Paper>
 );
}

