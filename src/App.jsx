import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Card, Space } from "antd";
import { useState } from "react";
import TableView from "./pages/TableView";
import FormDisabledDemo from "./pages/FormView";
import DescriptionView from "./pages/DescriptionView";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const App =  () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dataClick, setData] = useState(0);

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
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onSelect={(e) => {
              console.log(e.key);
              setData(e.key);
            }}
          />
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
            <Breadcrumb
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
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            <Space direction="vertical">
              <Card
                title="Default size card"
                extra={<a href="google.com">More</a>}
                style={{ width: "100%" }}
              >
                <DescriptionView></DescriptionView>
              </Card>
            </Space>

            <div>{dataClick && <h1>Messages: {dataClick}</h1>}</div>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default App;
