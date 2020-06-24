import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

export interface Props {
  doLogout: Function;
}

import { useToken } from "../hooks/session";

const LocationInfo: React.FC = () => {
  const { token, doLogout } = useToken();

  return (
    <View>
      <Text>Location</Text>
      <Text>{token}</Text>
      <Button>Get Location</Button>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LocationInfo;
