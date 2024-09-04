import axios from "axios";
import { setPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { options, popularMoviesUrl } from "../utils/constant";
import toast from "react-hot-toast";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(popularMoviesUrl, options);
        dispatch(setPopularMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default usePopularMovies;
