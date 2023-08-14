import { createContext } from "react";

export const SearchBarFocusedContext = createContext({
  isFocused: null,
  setFocused: () => {},
});
