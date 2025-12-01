import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/posts", { title, body })
      .then(() => navigate("/"))
      .catch((err) => console.error("Erro ao publicar:", err));
  };

  return (
    <div>
      <h2>Publicar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Conteúdo</label>
          <textarea
            className="form-control"
            rows="5"
            cols="3"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Publicar
        </button>
      </form>
    </div>
  );
};

export default Publish;
