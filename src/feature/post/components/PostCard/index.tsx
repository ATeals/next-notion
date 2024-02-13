"use client";

import { Description } from "./Description";
import { Image } from "./Image";
import { Provider } from "./Provider";
import { Tags } from "./Tags";
import { ElapsedTimeLine, TimeLine } from "./TimeLine";
import { Title } from "./Title";

type ComponentErrorType = "ContextError";

export class ComponentError extends Error {
  constructor(public object: { type: ComponentErrorType; message?: string }) {
    super();
  }
}

export const PostCard = Object.assign(Provider, {
  Title,
  Description,
  Tags,
  Image,
  TimeLine,
  ElapsedTimeLine,
});
