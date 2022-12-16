import type { FC } from 'react';
import type { RouteProps } from 'react-router-dom';
import PrivateRoute from './privateRoute';

export interface WrapperRouteProperties extends RouteProps {
  /** authorization？ */
  auth?: boolean;
}

const WrapperRouteComponent: FC<WrapperRouteProperties> = ({ auth, children }) => {
  if (auth) {
    return <PrivateRoute>{children}</PrivateRoute>;
  }
  return <>{children}</>;
};

export default WrapperRouteComponent;
