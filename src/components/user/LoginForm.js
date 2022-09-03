import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../../services/UserService";
import { lezzooActions } from "../../../store/lezzoo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    inputContainer: {
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        margin: 10,
        width: 350,
        height: 50,
        backgroundColor: "red",
        justifyContent: "center",
        borderRadius: 10,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        width: 350,
        height: 50,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
    },
});

export default function LoginForm() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.lezzoo.isAuthenticated
    );
    const [phone, setPhone] = useState(null);

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const user = await UserService.login(phone);
            if (user.token) {
                dispatch(lezzooActions.setAuth(true));
                AsyncStorage.setItem("token", user.token);
                AsyncStorage.setItem("phone", JSON.stringify(user.phone));
            }

            return user;
        } catch (err) {
            console.log(err);
            Promise.reject(err);
        }
    };

    return (
        <>
            <View style={styles.logo}>
                <Image
                    source={{
                        uri: "https://image.pitchbook.com/wtipuAKj31dft8diwn5YtAyG8K31567094928145_200x200",
                        height: 200,
                        width: 250,
                    }}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="+964 (0)"
                    onChangeText={(e) => setPhone(e)}
                />
                <View style={styles.button}>
                    <Button
                        title="Enter Your Phone Number"
                        color="white"
                        //disabled={btnDisabled}

                        onPress={() => navigation.navigate("Location")}
                    />
                </View>
            </View>
        </>
    );
}
