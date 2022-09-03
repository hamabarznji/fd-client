import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Location from "expo-location";

import MapView from "./Map";
import { useNavigation, useRoute } from "@react-navigation/native";
import LocationConfirmation from "./LocationConfirmation";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function LocationPicker({}) {
    const route = useRoute();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let foundedLocation = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: foundedLocation.coords.latitude,
                longitude: foundedLocation.coords.longitude,
            });

            /* await AsyncStorage.setItem(
                "latitude",
                foundedLocation.coords.latitude
            );
            await AsyncStorage.setItem(
                "longitude",
                foundedLocation.coords.longitude
            ); */
        })();
    }, []);

    // console.log(location, "here");

    return (
        <View style={styles.root}>
            {!location && !errorMsg ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <View>
                        <MapView
                            location={location}
                            setLocation={setLocation}
                        />
                        {route?.name == "Location" && <LocationConfirmation />}
                    </View>
                </>
            )}
        </View>
    );
}
