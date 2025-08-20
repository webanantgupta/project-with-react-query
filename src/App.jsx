import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useState } from "react";

import Error from "./pages/error/Error";
import AppRoutes from "./routes/AppRoutes";

function App() {
  // https://dummyjson.com/posts?limit=100
  const [page, setPage] = useState(1);


  const fetchPost = () => {
    return axios.get("https://dummyjson.com/posts?limit=100")
      .then((res) => {
        // console.log(res.data.posts);
        return (res.data.posts);

      }).catch((err) => {
        throw new Error(err.message);

      });
  }


  const queryResult = useQuery({
    queryKey: ["post"],
    queryFn: fetchPost,
  });
  // console.log(queryResult);

  const { data: posts, isLoading, isError, error } = queryResult;


  if (isLoading) return <h2>Loading....</h2>
  if (isError) return <h2>Error : {error.message}</h2>




  return (
    <div>
      {/* <h1 className="heading">Post</h1> */}
     {/* <Card posts={posts} page={page} setPage={setPage}/> */}
     <AppRoutes posts={posts} page={page} setPage={setPage}/>
      

    </div>
  )
}

export default App
