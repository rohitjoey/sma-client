import NavBar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="flex h-[calc(100vh-72px)] w-full items-center justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
