// import { useLocale } from '@/locales';
import type { FC } from 'react';
import type { RouteProps } from 'react-router-dom';
// import { Navigate, RouteProps, useLocation } from 'react-router';
// import { userState } from '@/stores/user';
// import { useGetCurrentUser } from '@/api';
// import { createBrowserHistory } from "history";

const PrivateRoute: FC<RouteProps> = ({children}) => (<div>{children}</div>) 

    
// const history = createBrowserHistory();

  // const [user, setUser] = useRecoilState(userState);

  // console.log('user:', user);
  // const logged = !!user.username;
  // console.log('username:', user.username, logged);
  // const navigate = useNavigate();
  // const { formatMessage } = useLocale();
  // const location = useLocation();

  // const { data: currentUser, error } = useGetCurrentUser();

  // useEffect(() => {
  //   console.log("currentUser:", currentUser);
  //   setUser({ ...user, username: currentUser?.username || "", logged: true });
  // }, [currentUser]);

  // if (error) {
  //   setUser({ ...user, logged: false });
  //   return <Navigate to="/login" />
      
  // }
  
  // return logged ? (
  //   <div>{children}</div>
  // ) : <Navigate to="/login" />
;

export default PrivateRoute;
