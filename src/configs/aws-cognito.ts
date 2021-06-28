import Amplify from 'aws-amplify';

const AWS_CONFIG = {
  aws_cognito_region: import.meta.env.VITE_AWS_COGNITO_REGION,
  aws_user_pools_id: import.meta.env.VITE_AWS_USER_POOL_ID,
  aws_user_pools_web_client_id: import.meta.env
    .VITE_AWS_USER_POOL_WEB_CLIENT_ID,
};

Amplify.configure(AWS_CONFIG);
