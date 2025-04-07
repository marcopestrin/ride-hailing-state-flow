import React from 'react';
import { Typography, Space, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { driverArrived, driverCancelled } from '../../redux/actions';

const { Title } = Typography;


const GoingToPassenger = () => {

  const dispatch = useDispatch();

  const arrivedHandle = () => {
    dispatch(driverArrived());
  }

  const undoHandle = () => {
    dispatch(driverCancelled());
  }


  return (

    <>    
    <Title level={3}>On going to</Title> 

    <Space direction="vertical" style={{ width: '100%' }} size="middle">

      <span className="horizontalLoader"></span>

      <Button type="primary" style={{ width: '100%' }} onClick={arrivedHandle}>
        Arrived
      </Button>
      <Button type="primary" danger style={{ width: '100%' }} onClick={undoHandle}>
        Undo
      </Button>
    </Space>
  </>
  );
};

export default GoingToPassenger