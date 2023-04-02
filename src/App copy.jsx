import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Card, Space, Button } from "antd";
import { useState } from "react";
// import TableView from "./pages/TableView";
// import FormDisabledDemo from "./pages/FormView";
// import DescriptionView from "./pages/DescriptionView";
import { Outlet, Link,useLocation,useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const navigate  = useNavigate ();
  // const location = useLocation();

  const handleClick = () => {
      navigate ('/post');
  };

  let name = '';

  try {
    
    const {state} = useLocation();
    const {farmName} = state;
    name = farmName;
  } catch (error) {

   
    
  }


  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Header style={{color:'white'}}>{name}</Header>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            // items={items}
            onSelect={(e) => {
              console.log(e.key);
              setData(e.key);
            }}
          >
            <Menu.Item key="1">
              <span>Deshboard</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Meseros</span>
              <Link to="/form" />
            
            </Menu.Item>
            <Menu.Item key="3">
              <span>login</span>
              <Link to="/login" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Outlet />
            {/* <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              Bill is a cat.
              {dataClick < 3 ? (
                <TableView></TableView>
              ) : (
                <FormDisabledDemo></FormDisabledDemo>
              )}
            </div> */}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            <Link to="/form">
              <Button type="primary">Primary Button</Button>
            </Link>
            <Link to="/post">
              <Button type="primary">Ppst Button</Button>
            </Link>

            {/* <Space direction="vertical">
              <Card
                title="Default size card"
                extra={<a href="google.com">More</a>}
                style={{ width: "100%" }}
              >
                <DescriptionView></DescriptionView>
              </Card>
            </Space> */}

            {/* <div>{dataClick && <h1>Messages: {dataClick}</h1>}</div> */}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default App;

// import React, { useEffect } from 'react';
// import axios from 'axios';

// function Posts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(response.data);
//       console.log(posts);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Link to={`/posts/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

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

// function App() {
  
//   return (
//     Posts()
//   );
// }

// export default App;

