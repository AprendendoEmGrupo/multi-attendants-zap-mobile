import { useContext } from "react";
import { Auth, AuthenticationContext } from "../contexts/authentication/authentication";

export default function useAuth() {
  const auth = useContext(Auth);
  return {
    ...auth,
    AuthenticationContext,
  };
}
