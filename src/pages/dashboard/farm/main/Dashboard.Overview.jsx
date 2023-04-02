import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

const data = [  { title: 'Total Ternak', qty: 100, link: '/farm/cattle/overview' },  { title: 'Total Karyawan', qty: 20, link: '/total-karyawan' },  { title: 'Total Pengeluaran', qty: 5000000, link: '/total-pengeluaran' },  { title: 'Total Agenda', qty: 5, link: '/total-agenda' },  { title: 'Ternak Sakit', qty: 2, link: '/ternak-sakit' },];

const DashboardOverview = () => {
  return (
    <div style={{ 
      backgroundImage: `linear-gradient(to bottom, #0077be, #003f7f)`,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '90%',
        flexWrap: 'wrap'
      }}>
        {data.map((item, index) => (
          <Card key={index} title={item.title} style={{ 
            width: 'calc(20% - 20px)',
            margin: '20px',
            textAlign: 'center',
            // backgroundColor: 'transparent',
            border: '2px solid white',
            borderRadius: '10px',
            // color: 'white',
            fontSize: '24px'
          }}>
            <p style={{ fontSize: '36px' }}>{item.qty}</p>
            <Button type="primary">
              <Link to={item.link} style={{ color: 'white' }}>View Details</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;
