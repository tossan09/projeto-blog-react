import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/contact')
      .then(res => setContent(res.data.content))
      .catch(err => console.error('Erro ao carregar conteúdo:', err));
  }, []);

  return (
    <div>
      <h2>Contato</h2>
      <p>{content}</p>
    </div>
  );
};

export default Contact;