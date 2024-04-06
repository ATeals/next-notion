"use client";

import { PostUIProvider } from "./Provider";
import { PostWapper } from "./Wapper";
import { PostUITitle } from "./Title";
import { PostUIDescription } from "./Description";
import { PostUIImage } from "./Image";
import { PostFooter } from "./Footer";
import { PostUIIcon } from "./Icon";

export const PostUI = Object.assign(PostUIProvider, {
  Wapper: PostWapper,
  Title: PostUITitle,
  Description: PostUIDescription,
  Image: PostUIImage,
  Footer: PostFooter,
  Icon: PostUIIcon,
});
