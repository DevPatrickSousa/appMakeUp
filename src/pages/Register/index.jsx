//imports
import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";
import { register } from './styles';
import Line from '../../components/Line';
import api from '../../../services/api';
import {AUTHENTICATION, CONTENT_TYPE} from '@env';
import LoadingComponent from "../../components/LoadingComponent/index";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { validateName, validateAge, validateEmail, validateNumber } from '../../utils/filters';
import { fetchToken, getToken, removeToken } from '../../utils/auth';

export default function Register() {

  const [userName, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function goToHomePage() {
    navigation.navigate('Home');
  }

  function clearInputs() {
    setName('');
    setAge('');
    setEmail('');
    setPassword('');
    setNumber('');
  }

  async function userRegister() {
  
    if (!validateName(userName)){
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Nome deve ter no mínimo 2 caracteres.'
      });
      return;
    }
  
    if(!validateAge(age)){
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Idade deve ter no máximo 2 números.'
      });
      return;
    }
  
    if(!validateEmail(email)){
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'E-mail inválido.'
      });
      return;
    }

    if(!password){
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Senha é obrigátoria.'
      });
      return;
    }

    if(!validateNumber(number)){
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Número de telefone inválido, favor inserir número com DDD.'
      });
      return;
    }

    setLoading(true);

    const token = await fetchToken();

    let option = { headers: { 'Content-Type': [CONTENT_TYPE], 'authorization': 'Bearer ' + token } }
  
    const data = {
      nome: userName,
      idade: age,
      email: email,
      senha: password,
      telefone: number,
    }
  
    await api.post('/registration?key=4dm1n', data, option)
      .then((res) => {
        clearInputs();
        Toast.show({
          type: 'success',
          text1: 'Usuário cadastrado com sucesso!',
          text2: 'Você será redirecionado para a tela inicial em instantes.'
        });
        setTimeout(() => {
          goToHomePage();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Erro ao cadastrar usuário!!',
          text2: 'Verifique se todos os campos foram preenchidos corretamente.'
        });
        removeToken();
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
      <View style={register.cardContainer}>
        <View style={register.avatarContainer}>
          <Image source={require('../../../assets/logoMaybePurple.png')}
            style={register.logo}
          />
          <View style={register.appMakeUp}>
          <Text style={register.textAppMakeUp}>
            AppMakeUp
          </Text>
        </View>
        </View>
          <View style={register.actionCard}>
            <InputComponent  minHeight={35} minWidthContainer={280} placeholder="Digite o seu Nome" value={userName} onChangeText={(text) => setName(text)} />
            <InputComponent  minHeight={35} minWidthContainer={280} placeholder="Digite a sua Idade" inputMode={'numeric'} value={age} onChangeText={(text) => setAge(text)} />
            <InputComponent  minHeight={35} minWidthContainer={280} placeholder="Digite o seu email" value={email} onChangeText={(text) => setEmail(text)} />
            <InputComponent  minHeight={35} minWidthContainer={280} placeholder="Digite a sua senha" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
            <InputComponent  minHeight={35} minWidthContainer={280} placeholder="Digite o seu telefone" inputMode={'numeric'} value={number} onChangeText={(text) => setNumber(text)} />
            <ButtonComponent minWidthContainer={280} color="#e989ff" minWidth={200} title="Cadastrar" borderRadius={10} onPress={userRegister}/>
            <View>
            <LoadingComponent visible={loading}/>
            </View>
            <View style={register.registerContainer}>
              <Text style={register.registerText} onPress={() => navigation.navigate('Login')}>
                Já possui uma conta? faça o login.
              </Text>
            </View>
          </View>
      </View>
  );
}




