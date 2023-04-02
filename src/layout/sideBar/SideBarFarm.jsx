import {
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    DesktopOutlined,
    TeamOutlined,
    MailOutlined,
    ContainerOutlined,
    AppstoreOutlined
  } from "@ant-design/icons";
  import { Breadcrumb, Layout, Menu, theme, Card, Space, Button,Divider,Badge  } from "antd";
  import { useState } from "react";
  import { Outlet, Link,useLocation,useNavigate } from "react-router-dom";
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children,type) {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  }
  
  const SideBarFarm = () => {
    const navigate  = useNavigate ();
    // const location = useLocation();
    const items = [
        getItem('Overview', '1',<Link to="/farm/overview" ><PieChartOutlined /></Link>),
        getItem('Insemination', '2', <Link to="/farm/overview2" ><PieChartOutlined /></Link>),
        getItem('Option 3', '3', <ContainerOutlined />),
        getItem('Ternak', 'sub1', <MailOutlined />, [
          getItem('Overview', '4',<Link to="/farm/cattle/overview" ><PieChartOutlined /></Link>),
          getItem('Daftar Ternak', '5',<Link to="/farm/cattle/list" ><PieChartOutlined /></Link>),
          getItem('Perawatan dan Pengobatan', '6'),
          getItem('Produktifitas Ternak','sub2' ,null, [getItem('ADG', '7'), getItem('Perah', '8')]),
        ]),
        getItem('Karyawan', 'sub3', <AppstoreOutlined />, [
          getItem('Option 9', '9'),
          getItem('Option 10', '10'),
          getItem('Submenu', 'sub3', null, [getItem('Option 11', '10'), getItem('Option 12', '11')]),
        ]),
        getItem('Notification', '12',       <Badge
        className="site-badge-count-109"
        count={8}
        style={{
          backgroundColor: '#52c41a',
        }}
      />),
      ];
  
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
          width={"15%"}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Header style={{color:'white'}}>{name}</Header>
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              onSelect={(e) => {
                console.log(e.key);
                // setData(e.key);
              }}
            >
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
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  };
  export default SideBarFarm;
  
  
  