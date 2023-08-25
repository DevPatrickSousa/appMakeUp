//imports

import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    //content of menu.
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
//here we show the menu DrawerNavigation.
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


