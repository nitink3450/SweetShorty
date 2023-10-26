import { createContext } from "react";

interface AppContextType {
  isSignUp: boolean;
  setIsSignUp: Function;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
