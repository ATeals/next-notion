export interface OpenGraphImage {
  height: string;
  url: string;
  width: string;
  type: string;
}

export interface OpenGraph {
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogLocale: string;
  ogType: string;
  twitterCard: string;
  twitterSite: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImage: OpenGraphImage[];
  twitterImage: OpenGraphImage[];
  favicon: string;
  charset: string;
  requestUrl: string;
  success: boolean;
}
