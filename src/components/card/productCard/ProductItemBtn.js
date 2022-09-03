import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
    btnContainer: {
        width: "90%",
        height: 80,
        borderRadius: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        // backgroundColor: "red",
    },
    btn: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function ProductItemBtn({ onAdd, onRemove, id }) {
    const basket = useSelector((state) => state.lezzoo.basket);
    const foundedItem = basket.find((item) => item.id == id);
    const ordereQty = basket.find((item) => item.id == id)?.ordereQty;
    return (
        <>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={onAdd}
                    disabled={foundedItem?.storeQty < foundedItem?.ordereQty}
                >
                    <Ionicons
                        name="add"
                        size={32}
                        color={
                            foundedItem?.storeQty < foundedItem?.ordereQty
                                ? "gray"
                                : "black"
                        }
                        style={styles.btn}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 24 }}>
                    {foundedItem?.ordereQty ? foundedItem?.ordereQty : 0}
                </Text>

                <TouchableOpacity onPress={onRemove}>
                    <AntDesign
                        name="minus"
                        size={32}
                        color={ordereQty == undefined ? "gray" : "black"}
                        style={styles.btn}
                        disabled={foundedItem?.ordereQt == 0}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
