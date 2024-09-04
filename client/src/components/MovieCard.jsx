import React from 'react'
import { tmdbImgPath } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setId, setOpen } from '../redux/movieSlice';

function MovieCard({movieId, movie_poster}) {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setId(movieId))
    dispatch(setOpen(true))
  }


  if(movie_poster === null) return null;
  return (
    <div onClick={handleOpen} className='mr-2 w-40 h-[220px] shrink-0'>
        <img className='w-full h-full object-cover' src={`${tmdbImgPath}${movie_poster}`} alt="movie-banner" />
    </div>
  )
}

export default MovieCard