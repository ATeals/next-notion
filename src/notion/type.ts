export interface PostInfo {
  title: string;
  coverImg?: string;
  tags: tag[];
  created_at: string;
  description: string;
  id: string;
}

export interface tag {
  id: string;
  name: string;
  color: string;
}

export interface CompactPost {
  title: string;
  id: string;
}

export interface AsideListObject {
  title: string;
  id: string;
  posts: Array<CompactPost>;
}

export interface NotionPage {
  id: string;
  parent: {
    type: string; // 페이지의 부모 타입 (일반적으로 "database_id" 또는 "page_id")
    [key: string]: any; // 기타 부모 정보
  };
  created_time: string; // 페이지 생성 시간
  last_edited_time: string; // 페이지 마지막 수정 시간
  archived: boolean; // 페이지가 보관 중인지 여부
  properties: {
    [key: string]: {
      id: string;
      type: string; // 속성의 타입 (예: "title", "rich_text", "number" 등)
      [propertyKey: string]: any; // 속성의 값 및 추가 정보
    };
  };
  url: string;
  cover:
    | {
        type: "external";
        external: {
          url: string;
        };
      }
    | null
    | {
        type: "file";
        file: {
          url: string;
          expiry_time: string;
        };
      }
    | null;
}

export interface NotionPageResponse {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: {
    type: string;
    database_id?: string; // 페이지가 데이터베이스의 일부인 경우에만 필요
    [key: string]: any;
  };
  archived: boolean;
  properties: {
    [key: string]: {
      id: string;
      type: string;
      [propertyKey: string]: any;
    };
  };
  url: string;
}

// Notion API에서 받은 응답의 전체 타입 정의
export interface NotionAPIResponse {
  object: "list";
  results: NotionPageResponse[];
  has_more: boolean;
  next_cursor: string | null;
}
