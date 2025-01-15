import { getUserData } from "@/api/users";
import { useAuth } from "@/context/auth";
import { User } from "@/lib/typedef";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, logout } = useAuth();

  const { data: userData, isLoading } = useQuery<User>({
    queryKey: ["userData", user?.userId],
    queryFn: () => getUserData(user?.userId!),
    enabled: !!user?.userId, // Only run query if user exists
    retry: true,
  });

  return (
    <div className="bg-teal-500 py-4 flex justify-between px-4">
      <div className="ml-6">
        <p className="font-sans text-xl">
          <Link to={user.isAuthenticated ? "/dashboard" : "/"}>
            {isLoading || !userData
              ? "Social Media APP"
              : `Welcome, ${userData?.fullname}`}
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
