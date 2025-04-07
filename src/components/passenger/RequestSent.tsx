import React, { useEffect } from 'react';
import { Typography, Spin, Row, Col, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { driverFound } from '../../redux/actions';

const { Title } = Typography;

interface RequestSentProps {
  text: string;
  spinner?: boolean
  rejected?: boolean
}

const RequestSent: React.FC<RequestSentProps> = ({ text, spinner, rejected }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {

      console.log(rejected)
      if (spinner || rejected) {
        return dispatch(driverFound());
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, spinner, rejected]);

  
  return (
    <Row
      justify="center" 
      align="middle"
    >
      <Col style={{ textAlign: 'center' }}>  
        <Space direction="vertical" size="large">
          <Title level={5}>{text}</Title>
          { (spinner || rejected) && <Spin indicator={<LoadingOutlined spin />} size="large" /> }
        </Space>
      </Col>
    </Row>
  );};

export default RequestSent