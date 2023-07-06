import 'react-native-safe-area-context';
import useAuth from "./src/hooks/useAuth";
import Route from "./src/routes";

import Home from './src/layout/screens/Home';
export default function App() {
  const { AuthenticationContext } = useAuth()
  return (
    <AuthenticationContext>
      <Route />
    </AuthenticationContext>
  );
}
