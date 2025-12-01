import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error('Erro ao carregar post:', err));
  }, [id]);

  if (!post) {
    return <p>Carregando post...</p>;
  }

  return (
    <div className="container">
      <h2>{post.title}</h2>
      {post.image && (
        <img src={post.image} alt={post.title} className="img-fluid mb-3" />
      )}
      <p className="text-break">{post.body}</p>
    </div>
  );
};

export default Post;