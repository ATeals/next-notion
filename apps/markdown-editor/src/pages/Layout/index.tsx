import { Outlet } from "react-router-dom";

import { OverlayProvider } from "@repo/react";

export const Layout = () => {
  return (
    <OverlayProvider>
      <main className="bg-gray-300">
        <Outlet />
      </main>
    </OverlayProvider>
  );
};
