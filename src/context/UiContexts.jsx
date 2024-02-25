import { createContext, useContext, useState } from "react";

const uiHelperContext = createContext();

export const useUiContext = () => useContext(uiHelperContext);

export function UiContexts({ children }) {
  const [breakPointHelper, setBreakPointHelper] = useState(false);
  const [toggleHelper, setToggleHelper] = useState(false);
  return (
    <>
      <uiHelperContext.Provider
        value={{
          breakPointHelper,
          setBreakPointHelper,
          toggleHelper,
          setToggleHelper,
        }}
      >
        {children}
      </uiHelperContext.Provider>
    </>
  );
}
