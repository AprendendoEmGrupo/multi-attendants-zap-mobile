import { createContext, useState } from "react";
import { AuthValueProps, ContextAuthenticationProps } from "./interfaces";

export const Auth = createContext<AuthValueProps>({});

export function AuthenticationContext({
  children,
}: ContextAuthenticationProps) {
  const [auth, setIsAuthenticated] = useState<AuthValueProps>({
    isAuthenticated: true,
  });
  return <Auth.Provider value={auth}>{children}</Auth.Provider>;
}
