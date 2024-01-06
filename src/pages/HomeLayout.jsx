import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default HomeLayout;
