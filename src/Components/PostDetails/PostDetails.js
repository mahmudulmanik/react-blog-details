import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import BlogPost from '../BlogPost/BlogPost';
import Comment from '../Comment/Comment';

export default function PostDetails() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePost(data));
  }, []);

  return (
    <>
      <BlogPost post={singlePost} />
      <Typography variant="h5">All Comments:</Typography>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          imgSrc={`https://loremflickr.com/g/320/240/paris,girl/all?random=${
            Math.random() * 10
          }`}
        />
      ))}
    </>
  );
}
