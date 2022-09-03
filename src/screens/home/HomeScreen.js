import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";
//import StoreService from "../../../services/StoreService";
import data from "../../../data/store/storeData";
import FlatListContainer from "../../components/FlatListContainer";
import LocationTitle from "../../components/home/LocationTitle";
export default function () {
    const soreteData = data.slice().sort((a, b) => b.rating - a.rating);
    const soreteDataByDate = data.slice().sort((a, b) => b.date - a.date);
    const soreteDataBySales = data.slice().sort((a, b) => b.slaes - a.slaes);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <FlatListContainer
                    data={soreteDataByDate}
                    categoryTitle="New"
                />

                <FlatListContainer
                    data={soreteDataBySales}
                    categoryTitle="Most Sales"
                />
                <FlatListContainer
                    data={soreteData}
                    categoryTitle="Most Rating "
                />
            </ScrollView>
        </SafeAreaView>
    );
}
