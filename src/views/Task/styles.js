import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },

    icons: {
        width: 45,
        height: 45,
        marginHorizontal: 6,
        marginVertical: 15
    },
    
    inativeIcon: {
        opacity: 0.5
    },

    label: {
        color: "#707070",
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },

    input: {
        fontSize: 18,
        color: "#282828",
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#4c168a",
        marginHorizontal: 10,
        padding: 10
    },
    
    inputArea: {
        borderWidth: 1,
        borderRadius: 6,
        height: 150,
        textAlignVertical: "top"
    },

    inLine: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 50
    },

    inputInline: {
        flexDirection: "row",
        marginVertical: 10,
        alignItems: 'center'
    },

    switchLabel: {
        color: '#4c168a',
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 5
    },

    removeLabel: {
        color: '#e63030',
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 5
    }
});

export default styles;