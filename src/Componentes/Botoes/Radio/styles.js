import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#444',        
    },
    texto: {
        fontSize: 14,
        marginLeft: 4,
    },
    radioContainer:{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginTop: 25,      
        height: 75,
    },
    titulo: {
        marginTop: 5,      
        borderRadius: 5,
        height: 41,      
        fontSize: 16,      
        paddingLeft: 10,              
        color: '#777'
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',       
    },
    vertical: {

    }
});

export default styles;