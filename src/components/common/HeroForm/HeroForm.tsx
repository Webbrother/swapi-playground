import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, notification, Select } from 'antd';

import { IHero } from '../../../api/hero/types';

interface HeroFormProps {
  value: IHero;
}

const { Option } = Select;
const wrapperCol = { offset: 8, span: 16 };
const requiredRule = [{ required: true, message: 'The field is required!' }];

export const HeroForm = ({ value }: HeroFormProps) => (
  <Form
    name='basic'
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={value}
    onFinish={newValue => {
      console.log(newValue);
      notification.success({
        message: 'Submit',
        description: 'See console',
      });
    }}
    onFinishFailed={newValue => {
      console.log(newValue);
      notification.error({
        message: 'Error',
        description: 'Form values are not valid',
      });
    }}
    validateTrigger={['onChange', 'onBlur']}
  >
    <Form.Item label='Name' name='name' rules={requiredRule}>
      <Input />
    </Form.Item>

    <Form.Item label='birth year' name='birth_year' rules={requiredRule}>
      <Input />
    </Form.Item>

    <Form.Item name='height' label='height' rules={requiredRule}>
      <InputNumber />
    </Form.Item>

    <Form.Item name='mass' label='mass' rules={requiredRule}>
      <InputNumber />
    </Form.Item>

    <Form.Item name='gender' label='Gender' rules={requiredRule}>
      <Select placeholder='select gender'>
        <Option value='male'>Male</Option>
        <Option value='female'>Female</Option>
      </Select>
    </Form.Item>

    <Form.List name='films'>
      {(fields, { add, remove }) => (
        <>
          {fields.map((field, index) => (
            <Form.Item label={'Film'} rules={requiredRule} key={index}>
              <Form.Item {...field} rules={requiredRule} noStyle>
                <Input placeholder='passenger name' style={{ width: '60%' }} />
              </Form.Item>

              {fields.length > 1 ? (
                <MinusCircleOutlined className='dynamic-delete-button ml-2' onClick={() => remove(field.name)} />
              ) : null}
            </Form.Item>
          ))}

          <Form.Item wrapperCol={wrapperCol}>
            <Button type='dashed' onClick={() => add()} icon={<PlusOutlined />}>
              Add film
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    <Form.Item wrapperCol={wrapperCol}>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
