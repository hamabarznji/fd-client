import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LocationPicker from "../components/location/LocationPicker";
import { lezzooActions } from "../../store/lezzoo";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({});

export default function LocationScreen() {
    const auth = useSelector((state) => state);
    console.log(auth);
    return (
        <>
            <LocationPicker />
        </>
    );
}
