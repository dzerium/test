import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

export interface Props {
  doLogin: Function;
}

const LocationInfo: React.FC<Props> = (props) => {
  const { doLogin } = props;
  return (
    <View style={styles.container}>
      <Button icon="login" mode="contained" onPress={() => doLogin()}>
        Log in using github
      </Button>
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
