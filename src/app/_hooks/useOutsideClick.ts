import { RefObject } from "react";

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  return { handleOutsideClick };
};
