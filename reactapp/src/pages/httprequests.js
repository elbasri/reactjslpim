import { React, useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';

const Httpreq = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((response) => {
           setPosts(response.data);
           console.log(response.data);
        })
        .catch((err) => {
           console.log(err);
        });
  }, []);

  return <ul>
    {posts.map(data=> (
     <li>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      </li>
      ))}
  </ul>;
};

export default Httpreq;

