import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

const GuardRoute: React.FC<
  RouteProps & {
    isPrivate?: boolean;
  }
> = ({ isPrivate = false, ...rest }) => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const currentUser = await Auth.currentUserInfo();
      if (!currentUser && isPrivate) {
        history.replace('/login');
      }
      if (currentUser && !isPrivate) {
        history.replace('/');
      }
    })();
  }, []);
  return <Route {...rest} />;
};

export default GuardRoute;
