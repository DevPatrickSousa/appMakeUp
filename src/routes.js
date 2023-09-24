import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './pages/Home';
import Laws from './pages/Laws';
import Login from './pages/Login';
import Register from './pages/Register';
import UsefulInformations from './pages/Useful_informations';
import Profile from './pages/Profile';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: '#EA9AB2' }}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={{ color: '#FFF' }}
      />
      <DrawerItem
        label="Laws"
        onPress={() => props.navigation.navigate('Laws')}
        labelStyle={{ color: '#FFF' }}
      />
      <DrawerItem
        label="Login"
        onPress={() => props.navigation.navigate('Login')}
        labelStyle={{ color: '#FFF' }}
      />
      <DrawerItem
        label="Register"
        onPress={() => props.navigation.navigate('Register')}
        labelStyle={{ color: '#FFF' }}
      />
      <DrawerItem
        label="Useful Informations"
        onPress={() => props.navigation.navigate('UsefulInformations')}
        labelStyle={{ color: '#FFF' }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
        labelStyle={{ color: '#FFF' }}
      />      
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Laws" component={Laws} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="UsefulInformations" component={UsefulInformations} />
      <Drawer.Screen name="Profile" component={Profile} />
      
            
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
