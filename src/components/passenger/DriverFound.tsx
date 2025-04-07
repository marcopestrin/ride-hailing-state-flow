import React from 'react';
import { Typography, Row, Col, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetails } from '../../redux/selectors';

const { Title, Text } = Typography;


const DriverFound = () => {
  const { location, payment, price }  = useSelector(selectDetails);

  return (
    <Row
      justify="center" 
      align="middle"
    >
      <Col style={{ textAlign: 'center', width: '100%'}}>  
        {/* <Space direction="vertical" size="large"> */}
          <Title level={5}>A Driver has been found.</Title>
          <Text type="secondary">
              Wait to <strong>{location}</strong>
          </Text>
          <span className="horizontalLoader"></span>

          <Text type="secondary">
              {
              payment === 'cash'
              ? <>You will pay <strong>{price}</strong>€ by <strong>{payment}</strong></>
              : <>You already paid <strong>{price}</strong>€ by <strong>{payment}</strong></>
            }
          </Text> 
        {/* </Space> */}
      </Col>
    </Row>
  );};

export default DriverFound