import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#4c168a'
    },
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#4c168a',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10

    },

    logo: {
        height: 30,
        width: 100
    },

    notification: {
      position: 'absolute',
      right: 20
    },

    notificationImage: {
        height: 30,
        width: 25      
    },

    notificationText: {
        color: '#4c168a',
        fontWeight: "800"
    },

    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13

    },

    leftIcon: {
        position: 'absolute',
        left: 20,
        alignItems: 'center'
    },

    leftIconImage: {
        height: 30,
        width: 30
    }
});

export default styles;