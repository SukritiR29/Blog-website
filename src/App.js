import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'Working on the....', authore: 'Harry', id: 1},
    { title: 'Welcome party', body: 'Working on the....', authore: 'Louis', id: 2 },
    { title: 'Summer internship', body: 'Working on the....', authore: 'Niall', id: 3 },
  ]);
  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.authore}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Home;