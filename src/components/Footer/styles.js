import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#5b209e',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        position: 'relative',
        bottom: 20
    },
    
    image: {
        height: 70,
        width: 70
    }
});

export default styles;