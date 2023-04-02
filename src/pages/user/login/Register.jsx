import { Form, Input, Button, Typography, Card, Space, Col, Row } from "antd";
const { Title, Text } = Typography;
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RegisterForm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const API_BASE_URL = "http://localhost:3000/api/breedingo/account/create";

  const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  async function postData(dataUser) {
    try {
      const response = await api.post(
        "http://localhost:3000/api/breedingo/account/create",
        {
          data: dataUser,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const data = {
      userEmail: values.username,
      userPhone: values.phone,
      userPassword: values.password,
    };
    console.log(data);
    //  CreateUser(data);
    // postData(data);
  };
  const backgroundImageUrl =
    "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
      }}
      className="login-page"
    >
      <Card style={{ width: "25%" }}>
        <Title level={2}>Breedingo Register</Title>
        <Text> Register untuk menikmati fitur dari Breedingo</Text>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone!" }]}
          >
            <Input
              size="large"
              placeholder="Phone"
              type="number"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input
              type="email"
              size="large"
              placeholder="Username"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Row>
              <Col span={24}>
                <Button
                  type="primary"
                  block
                  size="large"
                  style={{ fontWeight: "bold" }}
                  htmlType="submit"
                >
                  Register
                </Button>
              </Col>
            </Row>
            <Row style={{ textAlign: "center", paddingTop: 20 }}>
              <Col span={24}>
                <a href="/login">Sudah punya akun, Login disini</a>
              </Col>
              <Col span={24} style={{ textAlign: "right", paddingTop: 20 }}>
                <Button
                  type="primary"
                  size="large"
                  style={{ fontWeight: "bold" }}
                  onClick={onFinish}
                >
                  Coba akun demo
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default RegisterForm;
