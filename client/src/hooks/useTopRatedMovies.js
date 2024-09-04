import axios from "axios";
import { setTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { options, topRatedMoviesUrl } from "../utils/constant";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(topRatedMoviesUrl, options);
        dispatch(setTopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useTopRatedMovies;
