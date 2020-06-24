import React from "react";

import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

import { useForecast } from "../hooks/forecast";

const Forecast: React.FC = () => {
  const { forecast, getForecast } = useForecast();

  return (
    <View style={styles.container}>
      <Text>Get Forecast</Text>
      <Button mode="contained" onPress={() => getForecast(14, 121)}>
        Get Location
      </Button>

      {/*TODO: 
      1. map forecast
      2. Create component for table row
      3. {width, height} Dimensions.get('window') */}
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

export default Forecast;
