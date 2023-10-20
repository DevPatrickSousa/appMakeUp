import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import {AUTHENTICATION} from '@env';

export async function setToken() {
  try {
    let tokenOptions = { headers: { "authentication": AUTHENTICATION }}
    const response = await api.get('/getToken?t=4dm1n', tokenOptions);
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
