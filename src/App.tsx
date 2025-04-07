import React from 'react';
import { useSelector, Provider } from 'react-redux';
import store from './redux/store';
import './app.css';
import { Typography, Row, Col, Steps, Badge, Card, Space  } from 'antd';


import EndJobs from './components/driver/EndJob'; 
import GoingToDestination from './components/driver/GoingToDestination';
import GoingToPassenger from './components/driver/GoingToPassenger';
import RequestDriver from './components/driver/RequestDriver';
import NoRequestYet from './components/driver/NoRequestYet';

import CreateRide from './components/passenger/CreateRide';
import OnRide from './components/passenger/OnRide';
import EndRide from './components/passenger/EndRide';
import DriverFound from './components/passenger/DriverFound';
import RequestSent from './components/passenger/RequestSent';

import DriverArrivedToLocation from './components/common/driverArrivedToLocation';

import { selectStatus, selectDescription, selectDetails } from './redux/selectors';
import stepsStatus, { Step } from './stepStatus'

const { Title, Text } = Typography;

const RenderStepPassenger:React.FC<{status: string}> = ({ status }) => {
  switch (status) {
    case 'LOOKING_DRIVER':
      return <RequestSent
        text="Looking for a driver."
        spinner={true}
      />

    case 'DRIVER_FOUND':
      return <RequestSent 
        text="Request sent to driver. Waiting response."
        spinner={false}
      />

    case 'DRIVER_ACCEPTED':
      return <DriverFound />

    case 'DRIVER_REFUSED':
      return <RequestSent
        text="Driver rejected your request. Looking another one"
        spinner={false}
        rejected={true}
      />

    case 'DRIVER_CANCELLED':
      return <RequestSent
        text="Driver cancelled your request. Looking another one"
        spinner={false} 
        rejected={true}
      />

    case 'DRIVER_ARRIVED':
      return <DriverArrivedToLocation
        text="Your driver is arrived"
        driver={false}
      />

    // case 'IN_PROGRESS':
    //   return <OnRide />

    // case 'END_RIDE':
    //   return <EndRide />

    default:
      return <CreateRide />
  }
};


const RenderStepDriver:React.FC<{status: string}> = ({ status }) => {
  switch (status) {
    case 'DRIVER_FOUND':
      return <RequestDriver />

    case 'DRIVER_ACCEPTED':
      return <GoingToPassenger />

    // case 'DRIVER_REFUSED':
    //   return <>mmmmm</>

    case 'DRIVER_ARRIVED':
      return <DriverArrivedToLocation
        text="You are arrived"
        driver={true}
      />

    // case 'IN_PROGRESS':
    //   return <GoingToDestination />

    // case 'END_RIDE':
    //   return <EndJobs />

    default:
      return <NoRequestYet />
  }
};


const App: React.FC = () => {
  const description = useSelector(selectDescription);
  const details = useSelector(selectDetails);
  const status: string = useSelector(selectStatus);

  const driverRejected = ['DRIVER_CANCELLED','DRIVER_REFUSED'].includes(status);
  
  return (
    <Provider store={store}>
              
        {/* <Row justify="space-around" className="row-container">
          <Col className="gutter-row" span={11}>
            <Title level={2}>Passenger</Title>
          </Col>
          <Col className="gutter-row" span={11}>
            <Title level={2}>Driver</Title>
          </Col>
          <Col className="gutter-row" span={24}>
          <Steps
            current={ driverRejected
              ? stepsStatus.findIndex(i => i.tag === 'DRIVER_FOUND') // expection
              : stepsStatus.findIndex(i => i.tag === status)  // normal
            }
            items={stepsStatus.map((({ tag, ...rest}) => rest))}
            status={driverRejected ? 'error': 'process'}
          />
          </Col>
        </Row>  

        <Row justify="space-around" className="row-container">
          <Col className="gutter-row column-container" span={11}>
            <RenderStepPassenger status={status} />
          </Col>
          <Col className="gutter-row column-container" span={11}>
            <RenderStepDriver status={status} />
          </Col>
        </Row>       */}


      <Row gutter={16}>
        <Col span={24}>
          <Steps
            current={ driverRejected
              ? stepsStatus.findIndex(i => i.tag === 'DRIVER_FOUND') // expection
              : stepsStatus.findIndex(i => i.tag === status)  // normal
            }
            items={stepsStatus.map((({ tag, ...rest}) => rest))}
            status={driverRejected ? 'error': 'process'}
          />
        </Col>
        <Col span={12}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text={details.price ? `${details.price}€` : ''}>
              <Card title="PASSENGER" size="default">
                <RenderStepPassenger status={status} />
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
        <Col span={12}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text={''}>
              <Card title="DRIVER" size="default">
                <RenderStepDriver status={status} />
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
      </Row>
    </Provider>
  );
};

export default App;
