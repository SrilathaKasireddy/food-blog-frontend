import { useEffect ,useState} from 'react';
import { ItemCard } from './itemcard';
import { API } from './global';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import Form from 'react-bootstrap/Form';
import Search from "./Search"



 

export default function Items() {
  
  const[itemInfo,setitemInfo]=useState([]);
  const [token,setToken]=useState(localStorage.getItem("token"));

  function getItemAPI(){
    fetch(`${API}/items`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`, 
        
    },
    })
    .then((data)=>data.json())
    .then((mvs)=>setitemInfo(mvs))
    
  }

  useEffect(()=>{
    getItemAPI();
  },[]);
  const navigate = useNavigate();
  return (

   <div id ="heading-item" ><br></br><b id = "breakfast">
    Indian Breakfasts </b>

    
    
   
   <Button style={{ backgroundColor: "#277970",
   color:"white",marginRight:"auto"}} variant="outlined" 
  onClick={() => {
          return navigate("/home");
        }}
        > <HomeIcon  />  Back to Home</Button>
       
       
   
   <Button style={{ backgroundColor: "#277970",color:"white",margin:10}} variant="outlined"  onClick={() => {
          return navigate("/additems");
        }}
        >  <AddIcon/>AddItem</Button>
  
   {/* <Form className="d-flex" style={{ marginRight: "80%" }}>
        <Form.Control
         type="search"
         placeholder="Search...."
         className="me-2"
         aria-label="Search"
        />
        <Button style={{ backgroundColor: "#277970",
   color:"white"}} variant="outlined" 
  onClick={() => {
          return navigate("/items/search");
        }}
        > Search</Button>
       </Form>  */}
       
    <div  className="itemsList" >
    
      {itemInfo.map((value, index) => {
        return <ItemCard key={value._id} id={value._id} 
        img={value.imgg} name={value.namee} rating={value.ratingg} 
                          // content={value.contentt} 
                          method={value.method}
                          itminf={itemInfo} 
                          setitemInfo={setitemInfo} 
                          getItemAPI = {getItemAPI} />;
      })}
      
    </div>
    </div>
    
   
    
  );
}
