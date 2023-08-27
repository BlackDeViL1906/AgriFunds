import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import HomeScreen from "./pages/HomeScreen";
import WeatherAnalysis from "./pages/Weather";
import MarketLinkageScreen from "./pages/MarketLinkage";
import CropRecommendationScreen from "./pages/CropReccomendation";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Login}
          options={{ title: "Wecome" }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Weather" component={WeatherAnalysis} />
        <Stack.Screen name="Market" component={MarketLinkageScreen} />
        <Stack.Screen name="CropRec" component={CropRecommendationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
