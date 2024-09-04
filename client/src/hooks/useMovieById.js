import axios from 'axios'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constant';
import { setTrailerMovie } from '../redux/movieSlice';
import { useEffect } from 'react';

const useMovieById = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const trailer = res?.data?.results?.filter((item)=> item.type === "Trailer");
        dispatch(setTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]))
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])
}

export default useMovieById;