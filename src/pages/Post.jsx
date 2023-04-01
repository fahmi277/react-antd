import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
      title: 'Name',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Address',
      dataIndex: 'body',
      key: 'body',
    }
  ];
function Posts() {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect( () => {
//     async function fetchData() {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(response.data);
//       console.log(posts);
//     }

//     fetchData();
//   }, []);
useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=100`
        );
        setData(response.data);
        setPosts(response.data);
        console.log(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {/* <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul> */}
      <Table columns={columns} dataSource={posts} />
    </div>
  );

//   return (
//     <Table columns={columns} dataSource={posts} />

//   );
}

// function Post({ match }) {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
//       setPost(response.data);
//     }

//     fetchData();
//   }, [match.params.id]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }

function AppPost() {
  return (
    Posts()
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/posts">Posts</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Switch>
    //     <Route path="/" exact>
    //       <h1>Welcome to my React App!</h1>
    //     </Route>
    //     <Route path="/posts" exact component={Posts} />
    //     <Route path="/posts/:id" component={Post} />
    //   </Switch>
    // </div>
  );
}

export default AppPost;
