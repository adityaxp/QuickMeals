import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { View, Text } from "react-native";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  // console.log(isAuthenticated); {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
  return (
    <NavigationContainer>
      {isAuthenticated ? <AccountNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
