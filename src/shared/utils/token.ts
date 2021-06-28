import { Auth } from 'aws-amplify';

export const getToken = async () => {
  return (await Auth.currentSession()).getIdToken().getJwtToken();
};
