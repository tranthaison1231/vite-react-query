import { Button, Form, Typography } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormInput from '#/shared/components/common/FormInput';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { showError } from '#/shared/utils/tools';

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { t } = useTypeSafeTranslation();

  const onFinish = async ({ email, password }: Store) => {
    try {
      setLoading(true);
      await Auth.signIn(email, password);
      history.push('./');
    } catch (error) {
      setLoading(false);
      showError(error as Error);
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical" scrollToFirstError>
      <FormInput
        name="email"
        label="Email"
        messageVariables={{ name: 'Email' }}
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      />
      <FormInput
        name="password"
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
        type="password"
      />
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-5"
          block
          loading={loading}
        >
          {t('login.loginBtn')}
        </Button>
      </Form.Item>
    </Form>
  );
}

const Login = () => {
  return (
    <div>
      <div className="h-screen flex center2 p-5">
        <div className="shadow-2 rounded-16 bg-white p-10 w-96 box-content">
          <Typography.Title level={2}> Login </Typography.Title>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
