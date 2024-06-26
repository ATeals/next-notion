export const DEFAULT_PAGE_WIDTH = "700px";

export const DEFAULT_HEADER_HEIGHT = "46px";

export const BLOG_CONFIG = {
  DOMAIN:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://ateals.vercel.app",
  MAIN_JPG: "/images/main.jpg",
  MAIN_WEBP: "/images/main.webp",
  LOGO: "/images/logo.webp",
  PATH: {
    HOME: "/",
    SNIPPETS: "/snippets",
    TAGS: "/tags",
    POSTS: "/posts",
  },
  REVALIDATE_TAGNAME: "REVALIDATE_TAG",
  URL: {
    DOCS: "https://ateals-docs.vercel.app/",
  },
};

export const SITE_CONFIG = {
  title: "Teals",
  description: "Teal의 개발 블로그",
  url: "https://ateals.vercel.app/",
  since: "2023",
  owner: {
    name: "ateals",
    email: "ateals@icloud.com",
    link: "https://ateals.vercel.app/",
  },
};
