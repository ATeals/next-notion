import { useSyncExternalStore } from "react";

const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);
  return () => window.removeEventListener("storage", listener);
};

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, (dispatch: (value: T) => T | T) => void] {
  const getSnapShot = () => {
    const value = window?.localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : initialValue;
  };

  const getServerSnapShot = () => {
    return initialValue;
  };

  const localStorageValue = useSyncExternalStore(subscribe, getSnapShot, getServerSnapShot);

  const setLocalStorage = (dispatch: (value: T) => T | T): void => {
    const state = typeof dispatch === "function" ? dispatch(localStorageValue) : dispatch;

    window.localStorage.setItem(key, JSON.stringify(state));
    window.dispatchEvent(new StorageEvent("storage"));
  };

  return [localStorageValue, setLocalStorage];
}

export default useLocalStorage;
