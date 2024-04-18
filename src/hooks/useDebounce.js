import { useEffect, useState } from "react";

export const useDebounce = (changedValue, delayTime)=> {
  const [debouncedValue, setDebouncedValue] = useState(changedValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(changedValue);
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [changedValue, delayTime]);

  return debouncedValue
}

