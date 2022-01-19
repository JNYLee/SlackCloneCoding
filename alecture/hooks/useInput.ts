import { Dispatch, SetStateAction, useCallback, useState, UIEvent } from 'react';

type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;

// < any를 안쓰고 싶으면 >
// any를
// ChangeEvent<HTMLInputElement>
// e.target.value를
// e.target.value as unknown as T
// 로 바꾸면 된다.
