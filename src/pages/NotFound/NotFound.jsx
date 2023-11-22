import { Link } from 'react-router-dom'
import style from '../NotFound/notFound.module.scss' 

const NotFound = () => {
  return (
    <>
    <main className= {style.error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/home'> {`Retourner à la page d'accueil`} </Link>
    </main>
    </>
  );
};

export default NotFound;
