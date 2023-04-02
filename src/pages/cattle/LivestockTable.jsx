import { Table, Input } from 'antd';

const { Search } = Input;

const LivestockTable = () => {
  const dataSource = [
    {
      key: '1',
      label: 'Cattle 1',
      age: 2,
      gender: 'Male',
      forSale: false,
      animalType: 'Cattle',
      species: 'Angus',
      price: 1500,
    },
    {
      key: '2',
      label: 'Sheep 1',
      age: 1,
      gender: 'Female',
      forSale: true,
      animalType: 'Sheep',
      species: 'Dorper',
      price: 500,
    },
    {
      key: '3',
      label: 'Goat 1',
      age: 3,
      gender: 'Male',
      forSale: true,
      animalType: 'Goat',
      species: 'Boer',
      price: 750,
    },
  ];

  const columns = [
    {
      title: 'Label ternak',
      dataIndex: 'label',
      key: 'label',
      sorter: (a, b) => a.label.localeCompare(b.label),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Umur ternak',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Gender ternak',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: 'Dijual',
      dataIndex: 'forSale',
      key: 'forSale',
      render: (forSale) => <span>{forSale ? 'Yes' : 'No'}</span>,
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value, record) => record.forSale === value,
    },
    {
      title: 'Jenis hewan',
      dataIndex: 'animalType',
      key: 'animalType',
    },
    {
      title: 'Spesies hewan',
      dataIndex: 'species',
      key: 'species',
    },
    {
      title: 'Harga ternak',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['ascend', 'descend'],
      render: (price) => <span>Rp. {price}</span>,
    },
  ];

  return (
    <div>
      <h2>Livestock Table</h2>
      <Search
        placeholder="Search"
        style={{ width: 200, marginBottom: 20 }}
      />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default LivestockTable;
