import { Button, Form, Input } from 'antd';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { User } from '#/api/users';

interface Props {
  onClose: () => void;
  onSubmit: (input: User) => void;
  initialValues: Partial<User> | undefined;
  loading?: boolean;
}

const UserForm = ({ onClose, onSubmit, initialValues, loading }: Props) => {
  const { t } = useTypeSafeTranslation();
  const [form] = Form.useForm();
  return (
    <Form
      onFinish={data =>
        onSubmit({
          ...initialValues,
          ...data,
        })
      }
      form={form}
      layout="vertical"
      className="spaced"
      initialValues={initialValues}
    >
      <div>
        <Form.Item label="Name" name="name">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Avatar" name="avatar">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input type="text" />
        </Form.Item>
      </div>
      <div className="justify-around mt-75">
        <Button className="w-half" type="ghost" onClick={onClose}>
          {t('button.cancel')}
        </Button>
        <Button
          className="w-half"
          htmlType="submit"
          type="primary"
          loading={loading}
        >
          {t('button.save')}
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
