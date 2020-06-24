import React from "react";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { Alert } from "react-native";

export const useLocation = () => {
  const [latitude, setLatitude] = React.useState<number | null>(null);
  const [longtitude, setLongtitude] = React.useState<number | null>(null);

  const getLocation = async () => {
    let { status } = await requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Permission to access location was denied"
      );
      return;
    }

    const result = await getCurrentPositionAsync({});

    if (result) {
      const { latitude, longitude } = result.coords;

      setLatitude(Math.round(latitude));
      setLongtitude(Math.round(longitude));
    }
  };

  return { latitude, longtitude, getLocation };
};
