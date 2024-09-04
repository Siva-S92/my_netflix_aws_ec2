import axios from "axios";
import { setUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { options, upcomingMoviesUrl } from "../utils/constant";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(upcomingMoviesUrl, options);
        dispatch(setUpcomingMovies(res.data.results));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useUpComingMovies;
