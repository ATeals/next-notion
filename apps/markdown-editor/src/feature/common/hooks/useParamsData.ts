import { useSearchParams } from "react-router-dom";

export const useParmasData = (key: string) => {
  const [searchparmas, setSearchParams] = useSearchParams();

  const incoding = (data: string) => btoa(encodeURIComponent(data));

  const decoding = (data: string) => decodeURIComponent(atob(data));

  const setData = (data: string) => setSearchParams({ [key]: incoding(data) });

  const getData = () => (searchparmas.get(key) ? decoding(searchparmas.get(key) as string) : "");

  return { getData, setData };
};
