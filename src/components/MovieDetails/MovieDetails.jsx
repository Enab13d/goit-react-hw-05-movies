import { findMovieById } from 'constants/api';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieCardWrapper,
  ButtonLink,
  BtnLinkWrapper,
  GoBackBtn,
} from '../MovieDetails/MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import { Placeholder } from 'components/Cast/Cast.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';

const MovieDetails = () => {
  const [info, setInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await findMovieById(movieId);
        const { poster_path, title, vote_average, overview, genres } =
          response.data;
        setInfo({ poster_path, title, vote_average, overview, genres });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <GoBackBtn to={backLocationRef.current ?? '/movies'}>
        Go back
        <BsArrowReturnLeft />
      </GoBackBtn>
      <MovieCardWrapper>
        {info.poster_path ? (
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${info.poster_path}`}
            alt={info.title}
            width="360"
          />
        ) : (
          <Placeholder />
        )}
        <div>
          <h1>{info.title}</h1>
          <p>{`User score: ${Math.round(info.vote_average * 10)}%`}</p>
          <h2>Overview</h2>
          <p>{info.overview}</p>
          <h3>Genres</h3>
          <ul>
            {info.genres &&
              info.genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </MovieCardWrapper>
      <div>
        <h4>Additional info</h4>
        <BtnLinkWrapper>
          <li>
            <ButtonLink to="cast">Cast</ButtonLink>
          </li>
          <li>
            <ButtonLink to="reviews">Reviews</ButtonLink>
          </li>
        </BtnLinkWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
