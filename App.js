import { StatusBar } from "expo-status-bar";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./src/navigations/Navigation";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { lezzooActions } from "./store/lezzoo";
const CustomeApp = () => {
    const [token, setToken] = useState(null);
    const basket = useSelector((state) => state.lezzoo.basket);
    const dispatch = useDispatch();
    console.log(basket.length);
    useEffect(() => {
        async function fetechToken() {
            const tokenn = await AsyncStorage.getItem("token");
            setToken(tokenn);
            if (tokenn) {
                dispatch(lezzooActions.setAuth(true));
            }

            /*  const location = await AsyncStorage.getItem("longitude");
            console.log(location, "hereApp"); */
        }
        fetechToken();
    }, [token]);

    return (
        <>
            <StatusBar />
            <NavigationContainer>
                <Navigations />
            </NavigationContainer>
        </>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <CustomeApp />
        </Provider>
    );
}
