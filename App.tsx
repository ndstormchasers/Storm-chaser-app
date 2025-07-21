import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import WebLayout from "./src/components/WebLayout";

export default function App() {
  return (
    <SafeAreaProvider>
      <WebLayout>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar style="light" />
        </NavigationContainer>
      </WebLayout>
    </SafeAreaProvider>
  );
}