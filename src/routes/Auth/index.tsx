import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Chat from "../../screens/Chat";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
}
