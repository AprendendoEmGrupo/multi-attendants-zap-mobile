import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../layout/screens/Home";
import Chat from "../../layout/screens/Chat";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
}
