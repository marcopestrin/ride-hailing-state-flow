import React from 'react';
import { Typography, Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetails } from '../../redux/selectors';
import { driverAccepted, driverRefused, lookingDriver } from '../../redux/actions';

const { Title, Text } = Typography;

const RequestDriver = () => {
  const { price, payment, destination, location }  = useSelector(selectDetails);
  const dispatch = useDispatch();

  const handleReject = () => {
    dispatch(driverRefused());    
  }
  const handleAccept = () => {
    dispatch(driverAccepted());
  }
  
  return (
    <>    
      <Title level={3}>You have a new request</Title>   
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Text type="secondary">
          from <strong>{location}</strong> to <strong>{destination}</strong>.
        </Text>
        <Text type="secondary">
          price <strong>{price}</strong>€ pay by <strong>{payment}</strong>.
        </Text>

        <Button type="primary" style={{ width: '100%' }} onClick={handleAccept}>
          Accept
        </Button>
        <Button type="primary" danger style={{ width: '100%' }} onClick={handleReject}>
          Reject
        </Button>
      </Space>
    </>
  );
};

export default RequestDriver