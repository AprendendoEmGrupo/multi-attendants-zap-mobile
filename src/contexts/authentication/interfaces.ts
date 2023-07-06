import { ReactNode } from "react";

export interface ContextAuthenticationProps {
  children: ReactNode;
}

export interface AuthValueProps {
  isAuthenticated: boolean;
}