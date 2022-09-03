import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

export default function Map({ location, setLocation }) {
    return (
        <View style={styles.container}>
            <View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress={(e) => setLocation(e?.nativeEvent?.coordinate)}
                >
                    <Marker
                        coordinate={{
                            latitude: location?.latitude,
                            longitude: location?.longitude,
                        }}
                    />

                    <Circle
                        radius={300}
                        center={{
                            latitude: location?.latitude,
                            longitude: location?.longitude,
                        }}
                    />
                </MapView>
            </View>
            <View style={styles.callout}>
                <Button
                    title="Confirm Location"
                    color={"white"}
                    onPress={() => console.log("confirm locations")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        // top: Dimensions.get("window").height - 940,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    callout: {
        backgroundColor: "#E4343E",
        width: Dimensions.get("window").width - 180,
        height: Dimensions.get("window").height - 1000,
        justifyContent: "flex-end",
        top: Dimensions.get("window").height - 280,
        left: Dimensions.get("window").width - 234,
        borderRadius: 10,
    },
});
