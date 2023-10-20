//imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text,Button } from 'react-native';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from '../../components/ButtonComponent';
import { loginStyles } from './styles'
import Line from '../../components/Line';
import { useNavigation } from '@react-navigation/native';
import {AUTHENTICATION, CONTENT_TYPE} from '@env';
import api from '../../../services/api';
import LoadingComponent from "../../components/LoadingComponent/index";
import Toast from 'react-native-toast-message';
import { validateName, validateAge, validateEmail, validateNumber } from '../../utils/filters';
import { setToken, getToken, removeToken } from '../../utils/auth';
import { Card } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function goToHomePage() {
    navigation.navigate('Home');
  }

  async function login(){
    setLoading(true);
    const token = await setToken();

    let option = { headers: { 'Content-Type': [CONTENT_TYPE], 'authorization': 'Bearer ' + token } }

    const data = {
      email:email,
      senha:password
    }

    await api.post('/login?key=4dm1n', data, option)
      .then(async (res) => {
          const id = res.data._id
          await AsyncStorage.setItem('user_id', id);
          console.log(id);
          goToHomePage();
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Erro ao realizar login!',
          text2: 'Verifique se o email e a senha estão corretos.'
        });
        removeToken();
      })
      .finally(() => {
        setLoading(false);
        goToHomePage();
      })
  }

  const navigation = useNavigation();
  return (
    <View style={loginStyles.cardContainer}>
        <View style={loginStyles.avatarContainer}>
          <Image source={require('../../../assets/logoMaybePurple.png')}
            style={loginStyles.logo}
          />
          <View style={loginStyles.appMakeUp}>
          <Text style={loginStyles.textAppMakeUp}>
            AppMakeUp
          </Text>
        </View>
        </View>
        
        <View style={loginStyles.actionCard}>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o seu email" value={email} onChangeText={(text) => setEmail(text)} />
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite a sua senha" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
          <ButtonComponent title='login' name='arrow-right' color="#e989ff" minWidth={200} minHeightButton={55} borderRadius={10} onPress={login}/>
          <View>
          <LoadingComponent visible={loading}/>
          </View>
          <View style={loginStyles.registerContainer}>
            <Text style={loginStyles.registerText} onPress={() => navigation.navigate('Register')}>
              Não possui uma conta? registre-se.
            </Text>
          </View>
        </View>
    </View>
);
}




