import React from 'react';
import { Typography, Button, Statistic, Space } from 'antd';
import type { CountdownProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetails } from '../../redux/selectors';
// import { timeIsOver } from '../../redux/actions';


const { Title, Text } = Typography;
const { Countdown } = Statistic;

interface driverArrivedProps {
  text: string;
  driver: boolean;
}

// const dispatch = useDispatch();

const DriverArrivedToLocation: React.FC<driverArrivedProps> = ({ text, driver }) => {
  const { price, payment }  = useSelector(selectDetails);
  const deadline = Date.now() + 1000 * 60 * 4;
  const getHalfPrice = (price: number) => Math.floor(price / 2).toFixed(2);

  const onFinish: CountdownProps['onFinish'] = () => {
    // dispatch(timeIsOver());
  };
  const cancelHandle = () => {}

  const startRideHandle = () => {}

  return (
    <>
      <Space direction="vertical" size="middle" style={{ width: '100%' }} >
        <Title level={5}>{text}</Title>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />

        {driver ? 
          <>
            <Button type="primary" style={{ width: '100%' }} onClick={startRideHandle}>
              Start ride now
            </Button>
            <Text type="secondary">
              if you cancel the passage, payment is not expected
            </Text>
          </>
        :
          <Text type="secondary">
              if you don't reach your driver in time you will be charge <strong>{getHalfPrice(price || 0)}</strong>€.
          </Text>
        }
        <Button type="primary" danger style={{ width: '100%' }} onClick={cancelHandle}>
          Cancel
        </Button>
      </Space>
    </>
  )
};

export default DriverArrivedToLocation;