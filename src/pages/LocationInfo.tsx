import React from "react";
import jwtDecode from "jwt-decode";

import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

import { useLocation } from "../hooks/location";

export interface Props {
  route: any;
}

const parseToken = (token: string) => {
  let name = null,
    nickname = null;
  if (token) {
    return jwtDecode(token);
  }
  return { name, nickname };
};

const LocationInfo: React.FC<Props> = (props) => {
  const { longtitude, latitude, getLocation } = useLocation();

  const { token } = props.route.params;
  const { name, nickname } = parseToken(token);

  return (
    <View style={styles.container}>
      <Text>Hello, {name}!</Text>
      <Text>Github: https://github.com/{nickname}</Text>
      <Button mode="contained" onPress={() => getLocation()}>
        Get Location
      </Button>

      {latitude && longtitude ? (
        <>
          <Text>Latitude: {latitude}</Text>
          <Text>Latitude: {longtitude}</Text>
        </>
      ) : null}
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
