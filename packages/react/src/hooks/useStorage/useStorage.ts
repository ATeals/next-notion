"use client";

import { Serializable } from "./types";
import { SetStateAction, useSyncExternalStore } from "react";

interface StorageArguments<T extends Serializable> {
  key: string;
  initialValue?: T;
  type?: "local" | "session";
}

const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);
  return () => window?.removeEventListener("storage", listener);
};

const getSnapShot = (key: string, storage: globalThis.Storage) => {
  const value = storage.getItem(key);
  return value ? value : undefined;
};

const getServerSnapShot = <T>(value: T) => {
  return JSON.stringify(value);
};

export const useStorage = <T extends Serializable>({
  key,
  initialValue,
  type = "local",
}: StorageArguments<T>) => {
  const storage = () => (type === "local" ? window.localStorage : window.sessionStorage);

  const storeValue = useSyncExternalStore(
    subscribe,
    () => getSnapShot(key, storage()),
    () => getServerSnapShot(initialValue)
  );

  const state: T = storeValue !== undefined ? JSON.parse(storeValue) : initialValue;

  const setLocalStorage = (dispatch: SetStateAction<T>) => {
    const newState =
      typeof dispatch === "function" ? (dispatch as (value: T) => T)(state) : dispatch;

    storage().setItem(key, JSON.stringify(newState));

    window.dispatchEvent(new StorageEvent("storage"));
  };

  return [state, setLocalStorage] as const;
};
