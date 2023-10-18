import { StyleSheet } from 'react-native';

export const register = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e989ff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#e989ff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    marginBottom:15
  },
  avatar: {
    backgroundColor: '#FFF',
    shadowColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  line:{
    paddingBottom:15
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
  
  registerContainer:{
    alignItems:'center',
    paddingTop:10
  },
  registerText:{
    color: "#FFFFFF",
    fontFamily: 'nunito',
  },
  actionCard: {
    width: 'auto',
    maxHeight:'auto',
    backgroundColor: '#e989ff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffbbca',
    elevation: 6,
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 9,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,
    minHeight:420
  },
  appMakeUp: {
    
  },
  textAppMakeUp:{
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize:40,
    textShadowColor: '#8025b7', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5,
  },
});
