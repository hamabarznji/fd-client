import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./Styles";

import StoreInfo from "./StoreInfo";
import { useNavigation } from "@react-navigation/native";
export default function CardItem({ data, onPress }) {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("Product", {
                    storeid: data?.id,
                });
            }}
            style={({ pressed }) => [styles.root, pressed && styles.pressed]}
        >
            <View style={styles.cardContainer}>
                <Image
                    source={{
                        uri: data?.imageSrc,
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.storeInfoContainer}>
                <View style={{ marginLeft: 12, marginTop: 4 }}>
                    <Text style={styles.title}>{data?.name}</Text>

                    <StoreInfo
                        title={" " + data?.rating + " Rating"}
                        icon="star-outline"
                    />
                    <StoreInfo title={data?.address} icon="location-outline" />
                </View>
            </View>
        </Pressable>
    );
}
