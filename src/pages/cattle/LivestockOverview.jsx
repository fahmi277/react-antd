import { Card } from 'antd';

const LivestockOverview = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card title="Jumlah ternak" style={{ width: '30%' }}>
        <p style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>100</p>
      </Card>
      <Card title="Ternak perah" style={{ width: '30%' }}>
        <p style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>50</p>
      </Card>
      <Card title="Ternak daging" style={{ width: '30%' }}>
        <p style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>50</p>
      </Card>
    </div>
  );
}

export default LivestockOverview;
