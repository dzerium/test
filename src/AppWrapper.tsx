import React from "react";
import { View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useToken } from "./hooks/session";

import LocationInfo from "./pages/LocationInfo";
import LoginPage from "./pages/LoginPage";

const { Navigator, Screen } = createDrawerNavigator();

export interface Props {
  token: string | null;
}

const AppWrapper: React.FC<Props> = (props) => {
  const { token, doLogin, doLogout } = useToken();

  return token ? (
    <NavigationContainer>
      <Navigator initialRouteName={"LocationInfo"}>
        <Screen name="LocationInfo" component={LocationInfo} />
      </Navigator>
    </NavigationContainer>
  ) : (
    <LoginPage doLogin={doLogin} />
  );
};

export default AppWrapper;
