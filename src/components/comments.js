import { useEffect, useState } from 'react';
import CommentCard from './commentsCard';
import { API } from '../global';
import { useNavigate, useParams } from "react-router-dom";
import React  from 'react';
import { object } from 'yup/lib/locale';


export default function Comments() {
  const navigate = useNavigate();
  const [commentInfo, setcommentInfo] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { id } = useParams();
  
  function getCommentAPI() {
    fetch(`${API}/comments`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`,

      },
    })
      .then((data) => data.json())
      .then((mvs) => setcommentInfo(mvs))

  }

  useEffect(() => {
    getCommentAPI();
  }, []);



  return (
    <div id="heading-comment" >
      <h4 >Comments</h4>
      <div className="commentsList" >
         {console.log(commentInfo,"HEY")}
        {commentInfo.map((value, index) => {
          console.log(value,'value')
          return <CommentCard key={value._id}
            id={value._id}
            createdAt ={value.createdAt}
            postId={value.postId}
            UserName= {value.UserName}
            Comment={value.Comment}
            commentInfo={commentInfo}
            setcommentInfo={setcommentInfo}
            getCommentAPI={getCommentAPI}
            routeId={id}
             />;
        })}

      </div>
    </div>
  );
}