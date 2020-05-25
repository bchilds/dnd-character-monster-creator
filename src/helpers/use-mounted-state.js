import { useRef, useEffect } from "react";

export const useMountedState = () => {
  const isMounted = useRef(true);

  useEffect(() => () => (isMounted.current = false), []);

  return isMounted;
};
