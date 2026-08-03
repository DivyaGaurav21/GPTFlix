import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../constant";

const useFetchMovie = (url, action) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      dispatch(action(data.results || []));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [url, action, dispatch]);
};

export default useFetchMovie;
