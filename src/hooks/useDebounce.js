import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  //debounced value에 대한 state와 setter
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    //delay이후에 debounced value 업데이트
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    //delay 시간이 지나기 이전에 value가 수정되면(or delay가 바뀌면) timeout 삭제 
    //(value가 다시 업데이트되고, 그 순간부터 delay 시간이 설정된다.)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); //value나 delay가 수정되면 useEffect 다시 호출하여 Timeout 수정

  return debouncedValue;
};
