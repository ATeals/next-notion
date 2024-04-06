type FormetDateType = keyof typeof FormetDateMap;

const FormetDateMap = {
  "YYYY/MM/DD": (date: Date) => date.toISOString().slice(0, 10).split("-").join("/"),
  "YYYY.MM.DD": (date: Date) => date.toISOString().slice(0, 10).split("-").join("."),
  "YYYY-MM-DD": (date: Date) => date.toISOString().slice(0, 10),
  YYMMDD: (date: Date) => date.toISOString().slice(0, 10).split("-").join("").slice(2),
  "YYYY년 MM월 DD일": (date: Date) => {
    const [y, m, d] = date.toISOString().slice(0, 10).split("-");
    return `${y}년${m}월${d}일`;
  },
  YYYY: (date: Date) => date.toISOString().slice(0, 10).split("-")[0],
  MM: (date: Date) => date.toISOString().slice(0, 10).split("-")[1],
  DD: (date: Date) => date.toISOString().slice(0, 10).split("-")[2],
};

/**
 * Date 객체를 받아서 포맷팅한 문자열로 반환합니다.
 * @param date Date 객체
 * @param type 포맷팅 타입
 * @returns 포맷팅된 문자열
 */
export const formatDate = (date: Date, type: FormetDateType) => FormetDateMap[type](date);
