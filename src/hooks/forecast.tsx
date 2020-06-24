import React from "react";
import { Alert } from "react-native";
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";

const API_KEY = "93d862571c58d897c5d3eeb03f915de3";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
const SAMP_URL =
  "https://samples.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=b1b15e88fa797225412429c1c50c122a1";
export interface IForeCast {
  dt: number;
  temp: number;
  desc: string;
  main: string;
  pressure: number;
  humidity: number;
}

export const useForecast = () => {
  const [forecast, setForecast] = React.useState([]);

  const getForecast = async (latitude: number, longtitude: number) => {
    // const url = `${API_URL}?lat=${latitude}&lon=${longtitude}&cnt=10&appid=${API_KEY}`;
    const url = SAMP_URL;
    try {
      const response = await fetch(url, { mode: "cors" });
      const responseJson = await response.json();
      const list = responseJson.list;
      setForecast(list);
    } catch (error) {
      Alert.alert("Error in fetching", "Something went wrong");
    }
  };

  return { forecast, getForecast };
};
