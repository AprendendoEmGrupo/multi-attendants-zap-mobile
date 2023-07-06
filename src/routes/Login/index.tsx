import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../layout/screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function LoginRoute() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
