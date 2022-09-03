import React from "react";
import { View, StyleSheet } from "react-native";
import CardItemList from "./card/homeCardItem/CardItemList";
const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default function FlatListContainer({ data, onPress, categoryTitle }) {
    return (
        <View style={{ paddingTop: 10 }}>
            <View style={styles.card}>
                <CardItemList
                    data={data ? data : []}
                    categoryTitle={categoryTitle}
                />
            </View>
        </View>
    );
}
