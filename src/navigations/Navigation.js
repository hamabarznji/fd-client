import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticatedScreens from "./AuthenticatedScreens";
import { useSelector } from "react-redux";

import StartupScreen from "./StartupStack";
const Stack = createNativeStackNavigator();

const StartupStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={StartupScreen} />
        </Stack.Navigator>
    );
};

export default function Navigation() {
    const isAuthenticated = useSelector(
        (state) => state.lezzoo.isAuthenticated
    );

    return <>{isAuthenticated ? <AuthenticatedScreens /> : <StartupStack />}</>;
}
