import { Form, Input, Button, Typography, Card, Space, Col, Row } from "antd";
const { Title } = Typography;
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate,useLocation   } from 'react-router-dom';
import './PageTransition.css';
function LoginForm() {
    const navigate  = useNavigate ();
    const location = useLocation();
  
    const handleClick = () => {
        navigate ('/');
    };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    handleClick()
  };

  const backgroundImageUrl = 'https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', 
        
      }}
    //   className="login-page"
    className={`page entering`}
    >
      <Card style={{ width: "25%" }}>
        <Title level={2}>Breedingo Login</Title>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a style={{ alignSelf: "flex-start" }} href="/forgot-password">
                Forgot password?
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={24}>
                <Button type="primary" block size="large" htmlType="submit">Login</Button>
              </Col>
            </Row>
            <Row style={{ textAlign: "center", paddingTop: 20 }}>
              <Col span={24}>
              <a style={{ alignContent:'flex-end' }} href="/register">
                Belum punya akun, Daftar Sekarang?
              </a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
