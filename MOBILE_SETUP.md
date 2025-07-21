# 📱 Mobile GitHub Setup Guide

## Quick Copy-Paste Files for Phone Upload

### 1. First create these essential files on GitHub:

**package.json** - Copy this entire content:
```json
{
  "name": "storm-chasers-app",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios"
  },
  "dependencies": {
    "expo": "^53.0.9",
    "react": "19.0.0",
    "react-native": "0.79.2",
    "@react-navigation/native": "^7.1.6",
    "@react-navigation/native-stack": "^7.3.2",
    "@react-navigation/bottom-tabs": "^7.3.10"
  }
}
```

**App.tsx** - Copy this:
```typescript
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

### 2. Create folder structure:
- src/screens/
- src/components/
- src/navigation/
- src/api/
- src/state/

### 3. Key message:
This is a production-ready React Native storm chasing app with:
- Real GPS weather tracking
- Live storm alerts 
- AI predictions
- Professional UI

Contact: ndstormchasers2025 for admin access