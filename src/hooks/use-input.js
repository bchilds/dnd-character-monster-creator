import { useState, useCallback } from "react";

export const useInput = (fieldName, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const setName = `set${fieldName.charAt(0).toUpperCase()}${fieldName.substring(1)}`;
  return {
    [setName]: onChange,
    [`${fieldName}`]: value,
  };
};
