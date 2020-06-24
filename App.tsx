import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppWrapper from "./src/AppWrapper";

export default function App() {
  return (
    <PaperProvider>
      <AppWrapper token={null} />
    </PaperProvider>
  );
}
