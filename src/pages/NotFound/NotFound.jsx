import React from 'react';
import '../notFound/notFound.scss'; // 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner à la page d'accueil</a>
    </div>
  );
};

export default NotFound;
