import { OverlayProvider } from "@/feature/common/hooks";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <OverlayProvider>
      <main className="bg-gray-300 min-h-dvh">
        <Outlet />
      </main>
    </OverlayProvider>
  );
};
