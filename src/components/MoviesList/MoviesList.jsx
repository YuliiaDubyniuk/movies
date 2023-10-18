import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const getMovies = Array.isArray(movies) && movies.length;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const location = useLocation();
  return (
    <List>
      {getMovies &&
        movies.map(({ id, title, poster_path }) => (
          <li className="movie-item" key={id}>
            <Link className="movie-link" state={{ from: location }} to={`/movies/${id}`}>
              <img className="movie-img"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              />
              <p className="title">{title}</p>
            </Link>
          </li>
        ))}
    </List>
  );
};
