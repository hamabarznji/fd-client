import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import SearchField from "../../src/components/home/SearchField";
import stores from "../../data/store/storeData";
import CardItem from "../components/card/homeCardItem/CardItem";
const styles = StyleSheet.create({
    err: {
        fontSize: 24,
        fontWeight: "bold",

        alignSelf: "center",
    },
});

export default function SearchScreen() {
    const [value, setValue] = useState();
    const foundedStore = stores.find(
        (store) => store.name.toLowerCase() == value?.trim().toLowerCase()
    );
    let text = "Please type the Store name";

    const NotFouundText = () => <Text style={styles.err}>{text}</Text>;

    /*     useEffect(() => {
        text = "Nothing match found!";
    }, [foundedStore]); */

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchField setValue={setValue} />
            <View
                style={{
                    margin: 20,
                }}
            >
                {foundedStore ? (
                    <CardItem data={foundedStore ? foundedStore : []} />
                ) : (
                    <NotFouundText />
                )}
            </View>
        </SafeAreaView>
    );
}
