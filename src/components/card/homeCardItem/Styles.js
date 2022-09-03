import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        opacity: 2,
    },
    pressed: { opacity: 0.8 },
    cardContainer: {
        height: 120,
        width: 300,
        //  borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "#43c99a",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 4,
    },

    storeInfoContainer: {
        width: 300,
        height: 100,
        justifyContent: "flex-start",
        paddingTop: 4,
        backgroundColor: "white",
    },

    image: {
        width: 300,
        height: 150,
    },
});
