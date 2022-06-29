import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import tw from "twrnc";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Text>Here is the MapScreen</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
