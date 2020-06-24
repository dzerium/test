import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useToken } from "./hooks/session";

import LocationInfo from "./pages/LocationInfo";
import Forecast from "./pages/Forecast";
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
        <Screen
          name="LocationInfo"
          component={LocationInfo}
          initialParams={{ token: token }}
        />
        <Screen name="Forecast" component={Forecast} />
      </Navigator>
    </NavigationContainer>
  ) : (
    <LoginPage doLogin={doLogin} />
  );
};

export default AppWrapper;
