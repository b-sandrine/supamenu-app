import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignUp";
import LoadingScreen from "./screens/LoadingScreen";
import SigninScreen from "./screens/SignIn";
import SearchScreen from "./screens/SearchScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import PaymentSuccessScreen from "./screens/PaymentSuccessScreen";
const Stack = createStackNavigator();

export default function AppNavigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={PaymentSuccessScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}