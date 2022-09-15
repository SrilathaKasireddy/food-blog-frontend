// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { Card } from "@mui/material";
// import { API } from "./global";
// import { Grid, Typography } from "@material-ui/core";
// import Paper from '@mui/material/Paper';




// const formValidationSchema = yup.object({
//   UserName: yup.string().required(" name is required"),
//   Comment: yup.string().required("Please add comment "),
  

// }
// );



// export default function CommentItem() {

//   const [comment, setComment] = useState(null);
//   const [token,setToken]=useState(localStorage.getItem("token"));
//   const { id } = useParams();

//   function getCommentAPI() {
//     fetch(`${API}/comments/${id}`,{
//       method: "GET",
//       headers: {
//         'Content-type': 'application/json',
//         'x-auth-token': `${token}`, 
        
//     },
//     })
//       .then((data) => data.json())
//       .then((mvs) => setComment(mvs));
//   }

//   useEffect(() => {
//     getCommentAPI();
//   }, []);






//   return (
//     comment ? <CommentEditCore comment={comment} /> : "Loading..."
//   )

// }



// function CommentEditCore({ comment }) {


//   const { handleBlur,
//      handleChange, handleSubmit, values, touched, errors } = useFormik({
//     initialValues: {
//       UserName: comment.UserName,
//       Comment: comment.Comment,
      
//     },
//     validationSchema: formValidationSchema,
//     onSubmit: (values) => editCommentAPI(comment, values)
//   })





//   const navigate = useNavigate();
//   const [token,setToken]=useState(localStorage.getItem("token"));
//   function editCommentAPI(comment, values) {

//     fetch(`${API}/comments/${comment._id}`,
//       {
//         method: "PUT",
//         body: JSON.stringify(values),
//         headers: {
//            "Content-Type": "application/json" ,
//            'x-auth-token': `${token}`, 
//           }
//       }
//     ).then(() => navigate("/items/:id"))
//   }
//   return (
//     <Paper elevation={10} style={{ height: 600, margin: 40, backgroundColor: "#DEF7EA" }}>
//       <Grid container direction="column" alignItems="center" justify="center">
//         <form onSubmit={handleSubmit} style={{ padding: "5%" }} >

//           <TextField
//             error={touched.UserName && errors.UserName }
//             label="Name"
//             variant="filled"
//             name="UserName "
//             value={values.UserName }
//             onChange={handleChange}
//             onBlur={handleBlur}
//             style={{ padding: "2%" }}
//             helperText={touched.UserName  && errors.UserName } />
//           <br></br>

          
          

//           <TextField
//             error={touched.Comment && errors.Comment}
//             style={{ padding: "2%" }}
//             label="Comment"
//             variant="filled"
//             className="Comment input"
//             name="Comment"
//             value={values.Comment}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             helperText={touched.Comment && errors.Comment} />
//           <br></br>
          

//           <Button style={{ backgroundColor: "#277970", color: "white" }}
//             variant="filled" type="submit"

//           >  Save</Button>
//         </form>
//       </Grid>
//     </Paper>
//   );
// }
