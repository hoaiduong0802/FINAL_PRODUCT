import queryString from "query-string";
import { useLocation, useSearchParams } from "react-router-dom";

const useBlogService = () => {
  //Initial Hooks
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const [_, setSearchParams] = useSearchParams();

  
};
