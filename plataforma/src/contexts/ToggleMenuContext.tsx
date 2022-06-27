import { createContext, ReactNode, useState } from "react";

interface ToggleMenuContextType {
  toggle: boolean;
  setToggle: (newState: boolean) => void;
}

interface ToggleMenuContextProps {
  children: ReactNode;
}

const initialValue = {
  toggle: false,
  setToggle: () => {},
};

export const ToggleMenuContext =
  createContext<ToggleMenuContextType>(initialValue);

export const UserToggleMenuProvider = ({
  children,
}: ToggleMenuContextProps) => {
  const [toggle, setToggle] = useState(initialValue.toggle);

  return (
    <ToggleMenuContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};
