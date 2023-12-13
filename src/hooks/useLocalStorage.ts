import { useSyncExternalStore } from "react";

const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);
  return () => window?.removeEventListener("storage", listener);
};

const getSnapShot = (key: string) => {
  const value = window?.localStorage.getItem(key);
  return value ? value : undefined;
};

const getServerSnapShot = <T>(value: T) => {
  return JSON.stringify(value);
};

// type SerializableValue =
//   | string
//   | number
//   | boolean
//   | null
//   | SerializableValue[]
//   | { [key: string]: SerializableValue };

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, (dispatch: T | ((value: T) => T)) => void] {
  const localStorageValue = useSyncExternalStore(
    subscribe,
    () => getSnapShot(key),
    () => getServerSnapShot(initialValue)
  );

  let state: T =
    typeof localStorageValue === "string" ? JSON.parse(localStorageValue) : initialValue;

  const setLocalStorage = (dispatch: T | ((value: T) => T)): void => {
    state = typeof dispatch === "function" ? (dispatch as (value: T) => T)(state) : dispatch;

    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      throw new Error(`
        추가할 수 없습니다.
      `);
    }

    window.dispatchEvent(new StorageEvent("storage"));
  };

  return [state, setLocalStorage];
}

export default useLocalStorage;
