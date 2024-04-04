import { SetStateAction, useRef, useState } from "react";
import { Serializable } from "./types";
import { Storage } from "./entites";

interface StorageArguments<T extends Serializable> {
  key: string;
  initialValue?: T;
  type?: "local" | "session";
}

export const useStorage = <T extends Serializable>({
  key,
  initialValue,
  type,
}: StorageArguments<T>) => {
  const { current: storage } = useRef(new Storage<T>(key, initialValue, type));
  const [storedValue, setStoredValue] = useState(() => storage.get());

  const set = (value: SetStateAction<T | undefined>) =>
    setStoredValue((prevValue) => {
      const valueToStore = value instanceof Function ? value(prevValue) : value;

      if (!valueToStore) {
        storage.clear();

        return valueToStore;
      }

      storage.set(valueToStore);

      return valueToStore;
    });

  const clear = () => storage.clear();

  return [storedValue, set, clear] as const;
};
