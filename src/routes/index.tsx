import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import LoginRoute from "./Login";
import AuthRoute from "./Auth";

export default function Route() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthRoute /> : <LoginRoute />}
    </NavigationContainer>
  );
}
