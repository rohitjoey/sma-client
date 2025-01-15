import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const AuthRedirectRoute: React.FC<{ element: JSX.Element }> = ({
  element,
}) => {
  const { user } = useAuth();

  if (user.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return element;
};
