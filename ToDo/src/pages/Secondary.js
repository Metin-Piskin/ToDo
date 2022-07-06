import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import styles from "./pages.style/Secondary.style";

function Secondary() {
    const list = useSelector(s => s.TODOList);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>LİST</Text>
            <FlatList
                data={list}
                renderItem={({ item }) => <Text style={styles.title} >{item}</Text>}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
}
export default Secondary;
