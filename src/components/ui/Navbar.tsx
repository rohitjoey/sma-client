import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { useAuth } from "@/context/auth";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, logout } = useAuth();

  return (
    <div className="bg-teal-500 py-4 flex justify-between px-4">
      <div className="ml-6">
        <p className="font-sans text-xl">
          <Link to={user.isAuthenticated ? "/dashboard" : "/"}>
            Social Media APP
          </Link>
        </p>
      </div>
      <div className="flex gap-3 ">
        {user.isAuthenticated ? (
          <Button size={"lg"} asChild onClick={logout}>
            <Link to="/">Log out</Link>
          </Button>
        ) : (
          <>
            {(currentPath == "/register" || currentPath == "/") && (
              <Button size={"lg"} asChild>
                <Link to="/login">Log in</Link>
              </Button>
            )}{" "}
            {(currentPath == "/login" || currentPath == "/") && (
              <Button size={"lg"} asChild>
                <Link to="/register">Register</Link>
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
