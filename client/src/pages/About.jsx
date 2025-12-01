import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/about')
      .then(res => setContent(res.data.content))
      .catch(err => console.error('Erro ao carregar conteúdo:', err));
  }, []);

  return (
    <div>
      <h2>Sobre</h2>
      <p>{content}</p>
    </div>
  );
};

export default About;