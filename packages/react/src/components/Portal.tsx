"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ component, elementId }: { component: ReactNode; elementId: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>{mounted && createPortal(component, document.getElementById(elementId) as HTMLElement)}</>
  );
};
