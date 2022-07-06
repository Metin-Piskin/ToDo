import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";

import styles from "./pages.style/Primary.style";

function Primary() {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({ type: 'ADD_LIST', payload: { name: text } });
    };

    const handleClean = () => {
        dispatch({ type: 'CLEAN_LIST' });
    };

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.header}>TODO LİST</Text>
                <View style={styles.ınput}>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="ToDo"
                    />
                </View>
                <View style={styles.button}>
                    <Button color="#fa8231" title="Ekle" onPress={handleAdd} />
                    <Button title="Hepsini Temizle" onPress={handleClean} />
                </View>
            </View>

        </View>
    );
}
export default Primary;