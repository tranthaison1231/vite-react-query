import { Button, Form, Space } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { PropsWithChildren } from 'react';

interface Props {
  onFilter: (values: Store) => void;
}

const FilterWrapper = ({ onFilter, children }: PropsWithChildren<Props>) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    onFilter({});
  };

  return (
    <Form className="flex spaced items-center" form={form} onFinish={onFilter}>
      <Space size="middle" align="center">
        {children}
      </Space>
      <Space size="middle">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Filter
          </Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={onReset}>Clear</Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default FilterWrapper;
