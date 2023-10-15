import { StyleSheet } from 'react-native';

export const profile = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e989ff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      },
      stepContent: {
        padding: 20,
      },
      avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250,
        marginBottom:15
      },
      logo: {
        width: 194,
        height: 194,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.09,
        shadowRadius: 3.45,
        elevation: 1,
      },
      actionCard:{
        height:'auto',
        width:'auto',
        bottom:0,
        backgroundColor: '#e989ff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'#ffbbca',
        elevation:6,
        maxHeight:'320px',
        minWidth:'100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 9,
        },
        shadowOpacity: 0.09,
        shadowRadius: 3.45,
        flex:1
      },
      buttonContainer: {
        flexDirection:'row',
        gap:10,
      },
      textAppMakeUp:{
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize:40,
        textShadowColor: '#8025b7', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5,
      },
      saveButton:{
        marginVertical:10
      }
});
