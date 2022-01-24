import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    taskCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 12,
        backgroundColor: '#4c168a',
        borderRadius: 5,
        width: '85%',
        height: 70,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#111',
        shadowOpacity: 0.4,
        elevation: 5
    },
    done: {
        opacity: 0.3
    },
    
    leftArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    icon: {
        width: 40,
        height: 40
    },

    cardTitle: {
        marginLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },

    rightArea: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    cardDate: {
        color: '#fff',
        fontSize: 12
    },
    cardTime: {
        color: '#fff',
        fontSize: 12
    }

});

export default styles