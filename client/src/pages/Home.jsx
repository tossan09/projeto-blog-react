import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((err) => console.error("Erro ao deletar post:", err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Erro ao carregar posts:", err));
  }, []);

  return (
    <div>
      <h2>Últimos Posts</h2>
      <Link to="/publish" className="btn btn-success mb-3">
        Publicar Novo Post
      </Link>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body.substring(0, 100)}...</p>
              <Link
                to={`/post/${post._id}`}
                className="btn btn-primary me-2 btn-sm"
              >
                Ver mais
              </Link>
              <Link
                to={`/edit/${post._id}`}
                className="btn btn-light me-2 btn-sm"
              >
                Editar
              </Link>
              <button
                className="btn btn-danger me-2 btn-sm"
                onClick={() => handleDelete(post._id)}
              >
                Deletar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
