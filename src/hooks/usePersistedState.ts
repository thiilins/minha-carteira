import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(
  initialState: T,
  key: string,
  isString = false,
  prefix = "@MC"
): Response<T> {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(`${prefix}:${key}`);

    if (storageValue) {
      return isString ? storageValue : JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    const value = isString ? String(state) : JSON.stringify(state);
    localStorage.setItem(`${prefix}:${key}`, value);
  }, [isString, key, prefix, state]);

  return [state, setState];
}

export default usePersistedState;
