import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "../../components/card/productCard/ProductCard";

import StoreProductInfo from "../../components/StoreProductInfo";
const styles = StyleSheet.create({
    gobackBtn: {
        position: "absolute",
        marginTop: 60,
        marginLeft: 20,
        width: 40,
        height: 40,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    storeImageContainer: { width: "100%", height: 300 },
});
import stores from "../../../data/store/storeData";
export default function ProductScreen({ route }) {
    const navigation = useNavigation();
    const storeId = route.params?.storeid;
    const foundedStore = stores.filter((store) => store?.id == storeId);

    useLayoutEffect(() => {
        navigation.setOptions({});
    }, []);
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View style={styles.storeImageContainer}>
                <Image
                    source={{
                        // uri: "https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg",
                        uri: foundedStore[0].storeImage,
                        width: "100%",
                        height: 250,
                    }}
                />
                <View style={styles.gobackBtn}>
                    <TouchableOpacity>
                        <Ionicons
                            name="arrow-back"
                            size={32}
                            color="black"
                            onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <StoreProductInfo
                location={foundedStore[0].address}
                storeName={foundedStore[0].name}
                rating={foundedStore[0].rating}
            />
            <View style={{ height: "60%" }}>
                <FlatList
                    data={foundedStore[0].meals}
                    renderItem={({ item }) => <ProductCard data={item} />}
                    keyExtractor={(item) => item?.id?.toString()}
                />
            </View>
        </View>
    );
}
