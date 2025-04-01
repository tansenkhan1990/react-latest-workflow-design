import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProtectedLayout: React.FC = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);

  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
