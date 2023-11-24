import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import {AUTHENTICATION, API_KEY} from '@env';

export async function setToken() {
  try {
    let tokenOptions = { headers: { "authentication": AUTHENTICATION }}
    const response = await api.get(`/getToken?t=${API_KEY}`, tokenOptions);
    const token = response.data.token;

    await AsyncStorage.setItem('authToken', token);

    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function removeToken(){
  try {
    await AsyncStorage.removeItem('authToken')
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const user = await AsyncStorage.getItem('user');
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function removeUser() {
  try {
    const user = await AsyncStorage.removeItem('user');
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
