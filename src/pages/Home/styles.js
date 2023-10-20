import { StyleSheet } from 'react-native';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e989ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    
  },
  card: {
    height:'auto',
    width:'auto',
    minWidth: 300,
    maxHeight:200,
    maxWidth:350,
    backgroundColor: '#e989ff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#FFFF'
  },
  title: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
  },
  text: {
    color: "#FFFFFF",
    fontFamily: 'nunito',
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
  TouchableOpacity: {
    margin: 0,
    padding: 0
  },
  icon: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  info: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 320,
    top: 5
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
  cardsContainer: {
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
  },
  dialog:{
    backgroundColor: '#e989ff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,
    borderRadius:15,
    borderBottomEndRadius:20,
    borderBottomStartRadius:10,
  },
  buttonActions: {
    flexDirection:'column',
    paddingTop:0,
    paddingBottom:0,
    paddingLeft:0,
    paddingRight:0
   },
});
