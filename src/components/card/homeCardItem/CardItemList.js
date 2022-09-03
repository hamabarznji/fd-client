import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import CardItemTitleAndArrow from "./CardItemTitleAndArrow";
import CardItem from "./CardItem";
const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
    },
});

export default function CardItemList({ data, categoryTitle }) {
    return (
        <View style={styles.root}>
            <CardItemTitleAndArrow
                length={data?.length}
                categoryTitle={categoryTitle}
            />
            <View style={styles.list}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <CardItem data={item} />}
                    keyExtractor={(item) => item?.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </View>
    );
}
