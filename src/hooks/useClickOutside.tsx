import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  callBack: () => void,
  ref: RefObject<T>
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      callBack();
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callBack]);
};

export default useClickOutside;
