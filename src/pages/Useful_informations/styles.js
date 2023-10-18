import { StyleSheet } from 'react-native';

export const UsefulInformationsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e989ff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      },
    scrollViewContainer:{

    },
    cardContainer: {
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 'auto',
        maxWidth: 'auto',
        backgroundColor: '#FFFF',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#FFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
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
        padding:15
    },
    importantText: {
        color: "#ed188a",
        fontFamily: 'OpenSans',
    },
    title: {
        color: "#FFFFFF",
        fontFamily: 'nunito',
        marginLeft:0,
        padding:15,
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
        height:100,
        resizeMode:'cover',
        maxWidth:'100%',
        borderRadius:10
    },
    buttonContainer:{
        alignItems:'center',
        marginVertical:15
    }
});
