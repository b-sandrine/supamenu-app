import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignUp";
import LoadingScreen from "./src/screens/LoadingScreen";
import SigninScreen from "./src/screens/SignIn";
import SearchScreen from "./src/screens/SearchScreen";
import FeedbackScreen from "./src/screens/FeedbackScreen";
import PaymentSuccessScreen from "./src/screens/PaymentSuccessScreen";
import MenuScreen from "./src/screens/MenuScreen";
import MenuOrderedScreen from "./src/screens/MenuOrderedScreen";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();
export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="sign in" component={SigninScreen} />
        <Stack.Screen name="sign up" component={SignupScreen} />
        <Stack.Screen name="dashboard" component={HomeScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="feedback" component={FeedbackScreen} />
        <Stack.Screen name="payment success" component={PaymentSuccessScreen} />
        <Stack.Screen name="menuScreen" component={MenuScreen} />
        <Stack.Screen name="menu ordered" component={MenuOrderedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


