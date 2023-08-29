import { StyleSheet } from 'react-native';

export const UsefulInformationsStyles = StyleSheet.create({
    container: {
        backgroundColor: '#EA9AB2',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },
    cardContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    card: {
        display: 'flex',
        width: '100%',
        maxWidth: 'auto',
        minHeight:100,
        minWidth:360, 
        backgroundColor: '#EA9AB2',
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
        color: "#ed188a",
        fontFamily: 'OpenSans',
    },
    title: {
        color: "#FFFFFF",
        fontFamily: 'nunito',
        
        padding: 14,
        marginLeft:0
    },
});
