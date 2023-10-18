import { StyleSheet } from 'react-native';

export const laws = StyleSheet.create({
    container: {
        backgroundColor: '#e989ff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },
    cardContainer: {
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        display: 'flex',
        width: '100%',
        maxWidth: 'auto',
        minHeight:200,
        minWidth:360, 
        backgroundColor: '#e989ff',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        marginVertical: 10,
    },
    text: {
        color: "#FFFFFF",
        fontFamily: 'nunito',
        marginVertical:15,
        textAlign:'center'
    },
    cardContent: {
        color: "#FFFFFF",
        fontFamily: 'nunito',
        fontSize: 17,
        overflow: 'scroll',
        justifyContent: 'center',
        padding: 7,
    },
    moreInfo: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        textAlign: 'left',
        maxHeight: 20,
        color: "#FFFFFF",
        fontFamily: 'Nunito-MediumItalic',
        cursor: 'pointer',
        fontSize: 20,
    },
    importantText: {
        color: "#8025b7",
        fontFamily: 'OpenSans',
    },
    title: {
        color: "#FFFFFF",
        fontFamily: 'nunito',
        textAlign: 'center',
        padding: 14,
        fontSize:14
    },
    cardContainerStyle:{
        backgroundColor: '#b557db',
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'#FFFF',
        alignItems:'center',
    },
    cardImage:{
        height:170,
        resizeMode:'cover',
        maxWidth:'100%',
        borderRadius:10
    },
    buttonContainer:{
        alignItems:'center',
        marginVertical:15
    }
});
