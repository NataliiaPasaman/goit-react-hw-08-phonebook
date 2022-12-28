import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const PrivateRoute = ({ children, redirectTo="/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
