import { StyleSheet } from 'react-native';

export const profile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EA9AB2',
        alignItems: 'center',
        justifyContent: 'center',
      },
      stepContent: {
        padding: 20,
      },
      avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:20
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
      action:{
        paddingTop:30
      }
});
