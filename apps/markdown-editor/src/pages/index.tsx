import { lazy } from "react";

export const HomePage = lazy(() => import("./Home").then((module) => ({ default: module.Home })));

export const EditorPage = lazy(() =>
  import("./Editor").then((module) => ({ default: module.Editor }))
);
