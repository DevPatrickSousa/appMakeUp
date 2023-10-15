import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Routes from './src/routes'

export default function App() {
  const isAuthenticated = false;
  
  return (
  <>
    <Routes isAuthenticated={isAuthenticated}/>
    <Toast/>
  </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
