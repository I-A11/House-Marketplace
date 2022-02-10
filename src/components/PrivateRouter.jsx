import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRouter = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/signIn' />;
};

export default PrivateRouter;
