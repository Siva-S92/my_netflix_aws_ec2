import axios from "axios";
import { setNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { nowPlayingMoviesUrl, options } from "../utils/constant";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(nowPlayingMoviesUrl, options);
        dispatch(setNowPlayingMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useNowplayingMovies;
