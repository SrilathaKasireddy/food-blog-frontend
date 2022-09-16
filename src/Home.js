import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IcecreamSharpIcon from '@mui/icons-material/IcecreamSharp';
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();


 return (


  <div className="App">

   <header className="App-header">
    <Navbar expand="lg">
     <Container>
      < IcecreamSharpIcon style={{ color: "#277970" }} /><b><Navbar.Brand href="#home" id="header">Simply<sub> Recipes</sub></Navbar.Brand></b>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="dropdown"  >

        <NavDropdown title="Recipies" className="hover-underline-animation">
         <NavDropdown.Item href="/items" >Breakfast</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Lunch</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.5">Snacks & Appetizers</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.6">Drinks</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Easy & Quick" id="nav-dropdown" className="hover-underline-animation">
         <NavDropdown.Item href="/items">Easy Breakfast</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Quick Lunch</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Quick Dinner </NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Easy Pastas </NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Easy Chicken</NavDropdown.Item>
        </NavDropdown>
        {/* <NavDropdown title="Cuisines" id="nav-dropdown" className="hover-underline-animation">
         <NavDropdown.Item href="#action/3.1">Indian</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Mexican</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Japaneese</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Chineese</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">American</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">French</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Italian</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">British</NavDropdown.Item>
        </NavDropdown> */}
         <Nav.Link href="/About">About Us</Nav.Link>
       </Nav>
       <Form className="d-flex" style={{ marginLeft: "auto" }}>
        <Form.Control
         type="search"
         placeholder="Search...."
         className="me-2"
         aria-label="Search"
        />
        <Button  onClick={() => {
                  navigate("/search");
                }} variant="outline-success">Search</Button>
       </Form>
      </Navbar.Collapse>
     </Container>
    </Navbar>

   </header>
   <hr style={{ color: "#DFBA21" }}></hr>

   <div style={{ backgroundColor: "#caf6f2", width: "50%", textAlign: "center", marginLeft: "5%", borderRadius: "5px" }}>

    <h3 style={{ color: "green", textAlign: "center" }}>Less stress &  <CoffeeIcon style={{ color: "#277970" }} />MORE JOY </h3>
    <Card style={{ backgroundColor: "#caf6f2" }} >



     <img width="60%" height="300" alt="home" src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/2022-04-29-tcu-s3-rx011-aussie-italian-adam-liaw-classic-margherita-pizza-l_50.jpg">
     </img>

     <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Margherita Pizza
      </Typography>
      <Typography variant="body2" color="text.secondary">
       A traditional Neapolitan Margherita pizza recipe is
       tomato sauce with fresh tomatoes, mozzarella cheese and
       basil which represent the colours of the Italian flag
       – white cheese, green basil and red tomato. Margherita
       pizza gets its name after the Queen of the Italy of the
       same name who ruled in the late 1800s ‘Margherita di Savoia’.
       The name is pronounced: mahr-geh-ree-tah.


      </Typography>
     </CardContent>
     <CardActions>
      {/* <Button variant="success" size="small">Share</Button>
      <Button size="success">Learn More</Button> */}
     </CardActions>
    </Card>
   </div>

  </div>


 )
}