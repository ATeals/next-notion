import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main className="bg-gray-300">
      <Outlet />
    </main>
  );
};
