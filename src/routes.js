import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './pages/Home';
import Laws from './pages/Laws';
import Login from './pages/Login';
import Register from './pages/Register';
import UsefulInformations from './pages/Useful_informations';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getToken } from '../src/utils/auth';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [routes, setRoutes] = useState([
    <Tab.Screen name="Laws" component={Laws} options={{tabBarLabel: 'Leis',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="book-open-page-variant" color={color} size={20} />)}}/>,
    <Tab.Screen name="Informations" component={UsefulInformations} options={{tabBarLabel: 'Informações',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="help-box" color={color} size={20} />)}}/>,
    <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Início',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={20} />)}}/>,
  ]);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
    };
    checkToken();

    //fazer com que a cada 1s seja verificado o status do token.
    const interval = setInterval(() => {
      checkToken();
    }, 1000);

    //liimpar o intervalo quando o componente for desmontado
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getRoutes = () => {
    return isAuthenticated ? [
      ...routes,
      <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: 'Profile',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account-circle" color={color} size={20} />)}}/>,
      <Tab.Screen name="Logout" component={Logout} options={{tabBarLabel: 'Logout',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="exit-to-app" color={color} size={20} />)}}/>,
    ] : [
      ...routes,
      <Tab.Screen name="Login" component={Login} options={{tabBarLabel: 'Entrar',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="login-variant" color={color} size={20} />)}}/>,
      <Tab.Screen name="Register" component={Register} options={{tabBarLabel: 'Registrar',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account-plus" color={color} size={20} />)}}/>,
    ];
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#8025b7"
        barStyle={{ backgroundColor: '#b557db' }}
        inactiveColor='#FFF'
      >
        {getRoutes()}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
