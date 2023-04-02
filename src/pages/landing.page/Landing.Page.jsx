import { Card, Button } from 'antd';
import { Outlet, Link,useLocation,useNavigate } from "react-router-dom";
const LivestockLandingPage = () => {
  return (
    <div>
      <header style={{ 
        backgroundColor: '#fff',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          fontSize: '24px',
          color: '#333'
        }}>Livestock Management System</h2>
        <div style={{ display: 'flex' }}>
          <Button style={{ marginRight: '10px' }}>Login</Button>
          <Button type="primary">Sign up now</Button>
        </div>
        
      </header>

      <div style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          width: '90%',
          maxWidth: '1200px',
          margin: '50px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <Card title="Farm Features" style={{ 
            width: '100%',
            padding: '20px',
            marginBottom: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%'
            }}>
              <Card title="Animal Tracking" style={{ width: 'calc(25% - 20px)', margin: '0 10px 20px' }}>
                <p>Keep track of your livestock's health, location, and performance with our advanced tracking system.</p>
              </Card>
              <Card title="Inventory Management" style={{ width: 'calc(25% - 20px)', margin: '0 10px 20px' }}>
                <p>Easily manage your livestock inventory, including feed, medicine, and equipment.</p>
              </Card>
              <Card title="Data Analysis" style={{ width: 'calc(25% - 20px)', margin: '0 10px 20px' }}>
                <p>Analyze your livestock's performance and health trends with our customizable reports and data analytics tools.</p>
              </Card>
              <Card title="Smart Alerts" style={{ width: 'calc(25% - 20px)', margin: '0 10px 20px' }}>
                <p>Receive real-time alerts and notifications on your mobile device to stay on top of any issues or changes.</p>
              </Card>
            </div>
          </Card>
          <Link to="/farm/overview2" > <Button type="primary" size="large" style={{ marginTop: '30px' }}>Try Demo System Now</Button></Link>
         
        </div>
      </div>
    </div>
  );
}

export default LivestockLandingPage;
