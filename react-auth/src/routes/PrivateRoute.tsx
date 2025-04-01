import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { JSX } from "react/jsx-runtime";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
