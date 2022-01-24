import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    filter: {
        flexDirection: "row",
        width: '100%',
        height: 70,
        justifyContent: "space-around",
        alignItems: "center"

    },

    filterActived: {
        fontWeight: "700",
        fontSize: 16,
        color: "#4c168a"
    },

    filterUnactived: {
        fontWeight: "600",
        fontSize: 16,
        color: "#868686",
        opacity: 0.4
    },

    content: {
        width: '100%',
        marginTop: 10,
        marginBottom: 80
    }

});

export default styles;