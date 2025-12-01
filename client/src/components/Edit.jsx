import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  console.log("ID do post:", id);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch((err) => console.log("erro ao carregar o post:", err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/posts/${id}`, { title, body })
      .then(() => navigate("/"))
      .catch((err) => console.log("Erro ao editar o post:", err));
  };

  return (
    <div>
      <h2>Editar Post</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Titulo</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Conteudo</label>
          <textarea
            className="form-control"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};
export default Edit;
