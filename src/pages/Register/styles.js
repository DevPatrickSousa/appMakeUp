import { StyleSheet } from 'react-native';

export const register = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150
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
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
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
  actionCard:{
    paddingTop:30,
    height:'auto',
    width:'auto'
  }
});
