import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId/*" element={<MovieDetails />} />
            </Route>
        </Routes>
      </Suspense>
    </>
  );
};
