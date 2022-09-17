import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { Card } from "@mui/material";
import { API } from "../global";
import { Grid, Typography } from "@material-ui/core";
import Paper from '@mui/material/Paper';
import React from 'react';

const formValidationSchema = yup.object({
  namee: yup.string().required("Item name is required"),
  imgg: yup.string().required("Please add image "),
  contentt: yup.string().required("Please add description").min(20, "Minimum 20 characters"),
}
);

export default function EditItem() {
  const [item, setItem] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { id } = useParams();

  function getItemAPI() {
    fetch(`${API}/items/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`,

      },
    })
      .then((data) => data.json())
      .then((mvs) => setItem(mvs));
  }

  useEffect(() => {
    getItemAPI();
  }, []);
  return (
    item ? <ItemEditCore item={item} /> : "Loading..."
  )
}
function ItemEditCore({ item }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { handleBlur,
    handleChange, handleSubmit, values, touched, errors } = useFormik({
      initialValues: {
        namee: item.namee,
        imgg: item.imgg,
        contentt: item.contentt

      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => editItemAPI(item, values)
    })

  function editItemAPI(item, values) {
    fetch(`${API}/items/${item._id}`,
      {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': `${token}`,
        }
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
          <br />

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
          <br />
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

          <br />
          <br />

          <Button style={{ backgroundColor: "#277970", color: "white" }}
            variant="filled" type="submit"

          >  Save</Button>
        </form>
      </Grid>
    </Paper>
  );
}
