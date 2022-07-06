import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7f8c8d",
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fa8231",
        margin: 5,
        padding: 5,
        fontStyle: "italic",
        textAlign: "center",
    },
    title: {
        borderWidth: 3,
        margin: 10,
        padding: 5,
        borderRadius: 8,
        fontSize: 20,
        fontWeight: "italic",
        color: "white",
        borderColor: "#fa8231",
        backgroundColor: "#fa8231",
        flex: 1,
    },
});

export default styles;