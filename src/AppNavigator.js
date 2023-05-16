import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignUp";
import LoadingScreen from "./screens/LoadingScreen";
const Stack = createStackNavigator();

export default function AppNavigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoadingScreen} />
                <Stack.Screen name="signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}