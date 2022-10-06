import { useEffect, useState } from 'react';
import CommentCard from './commentsCard';
import { API } from '../global';
import { useNavigate } from "react-router-dom";
import React  from 'react';
import { object } from 'yup/lib/locale';


export default function Comments() {
  const navigate = useNavigate();
  const [commentInfo, setcommentInfo] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  
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
        {commentInfo.map((value, index) => {
          console.log(value,'value')
          return <CommentCard key={value._id}
            id={value._id}
            createdAt ={value.createdAt}
            UserName={value.UserName} Comment={value.Comment}
            commentInfo={commentInfo}
            setcommentInfo={setcommentInfo}
            getCommentAPI={getCommentAPI} />;
        })}

      </div>
    </div>
  );
}