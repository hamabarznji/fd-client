import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ProductCardItemInfo from "./ProductCardItemInfo";
import ProductItemBtn from "./ProductItemBtn";
import { lezzooActions } from "../../../../store/lezzoo";
import LineDvider from "../../LineDvider";
const styles = StyleSheet.create({
    root: {
        flexDirection: "column",
        width: 400,
        height: 225,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 25,
        backgroundColor: "white",
    },
});

export default function ProductCard({ data }) {
    const dispatch = useDispatch();
    const addHandler = () => {
        dispatch(
            lezzooActions.addToBasketHandler({
                id: data?.id,
                name: data?.name,
                image: data?.imageSrc,
                price: data?.price,
                storeid: data?.storeid,
                storeQty: data?.qty,
                ordereQty: 1,
            })
        );
    };
    const removeHandler = () => {
        dispatch(lezzooActions.removeItemFromBasketHandler(data.id));
    };

    return (
        <>
            <View style={styles.root}>
                <ProductCardItemInfo data={data} />
                <LineDvider />
                <ProductItemBtn
                    onAdd={addHandler}
                    onRemove={removeHandler}
                    id={data?.id}
                />
            </View>
        </>
    );
}
