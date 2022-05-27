import { useState, useEffect } from "react";
import BlogList from "./bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) { //error coming back from server
        throw Error('could not fetch the data for that resourece');
      }
      return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch(err => {
        //auto catches networks / connetion error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, []);

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;
