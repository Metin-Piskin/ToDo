import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner_container: {
        flex: 1,
        backgroundColor: "#7f8c8d",
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        justifyContent: "flex-start",
        flex: 1,
        color: "#fa8231",
        fontStyle: "italic",
    },
    ınput: {
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderColor: "#fa8231",
        margin: 10,
        padding: 5,
        justifyContent: "flex-start",
    },
    button: {
        flexDirection: "column",
        justifyContent: "flex-end",
        flex: 1,
        margin: 10,
        padding: 5,
        borderRadius: 8,
    }
});

export default styles;