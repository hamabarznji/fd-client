import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
    root: {
        width: 400,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        margin: 15,
    },
});
const CustomeText = ({ text }) => (
    <Text style={{ fontSize: 18, fontWeight: "bold", margin: 20 }}>{text}</Text>
);
export default function BasketItemCard({ data }) {
    return (
        <>
            <View style={styles.root}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <CustomeText text={`${data.ordereQty}X`} />
                    <Image
                        source={{
                            uri: data?.image,
                        }}
                        style={{ width: 75, height: 75, borderRadius: 50 }}
                    />
                    <CustomeText text={data?.name} />
                    <CustomeText text={`$${data.price}`} />
                    <TouchableOpacity>
                        <AntDesign name="minus" size={32} color={"black"} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
