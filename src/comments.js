import { useEffect ,useState} from 'react';
import CommentCard from './commentsCard';

import { API } from './global';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';


 

export default function Comments() {
  
  const[commentInfo,setcommentInfo]=useState([]);
  // const [token,setToken]=useState(localStorage.getComment("token"));
  
  function getCommentAPI(){
    fetch(`${API}/comments`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        // 'x-auth-token': `${token}`, 
        
    },
    })
    .then((data)=>data.json())
    .then((mvs)=>setcommentInfo(mvs))
    
  }

  useEffect(()=>{
    getCommentAPI();
  },[]);
  const navigate = useNavigate();
  return (

   <div id ="heading-comment" >
   
   
   
   {/* <Button style={{ backgroundColor: "#277970",color:"white",margin:10}} variant="outlined"  onClick={() => {
          return navigate("/addcomments");
        }}
        >  <AddIcon/>AddComment</Button> */}
  
   
   
   
    <div  className="commentsList" >
    
      {commentInfo.map((value, index) => {
        return <CommentCard key={value._id} 
        id={value._id} 
        UserName={value.UserName} Comment={value.Comment}
        commentInfo={commentInfo} 
                          setcommentInfo={setcommentInfo} 
                          getCommentAPI = {getCommentAPI} />;
      })}
      
    </div>
    </div>
    
   
    
  );
}
