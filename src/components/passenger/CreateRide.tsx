import React from 'react';
import { useDispatch } from 'react-redux';
import type { FormProps } from 'antd';
import { Button, Input, Select, Form, Typography } from 'antd';
import { lookingDriver } from '../../redux/actions';

const { Title } = Typography;
const paymentMethodOptions = [{ value: 1, label: 'Cash' }, { value: 2, label: 'Card' }];

type FieldType = {
  location: string
  destination: string
  payment: number
};

const CreateRide = () => {

  const dispatch = useDispatch();

  const onSubmit: FormProps<FieldType>['onFinish'] = ({ location, destination, payment } ) => {
    const price = +(Math.random() * (25 - 5) + 5).toFixed(2);
    dispatch(lookingDriver({
      price,
      payment,
      destination,
      location
    }));

  };
  
  return (
      <Form
        name="basic"
        initialValues={{ payment: 1 }}
        onFinish={onSubmit}
      >
        <Title level={3}>New ride</Title>
        <Form.Item<FieldType>
          label="Location"
          name="location"
          rules={[{
            required: true,
            message: 'Please insert pickup address!'
          }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Destination"
          name="destination"
          rules={[{
            required: true,
            message: 'Please pick your destination'
          }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Payment method"
          name="payment"
          rules={[{
            required: true,
            message: 'Please select payment method!'
          }]}
        >
          <Select defaultValue="Cash" options={paymentMethodOptions} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Choose this ride
          </Button>
        </Form.Item>
      </Form>
  );
};

export default CreateRide
