//imports

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";
import { login } from './styles';
import Line from '../../components/Line';
import { useNavigation } from '@react-navigation/native';
export default function Login() {
  function UpdatingData() {
    alert('teste');
  }
  const navigation = useNavigation();
  return (
      <View style={login.cardContainer}>
        <StatusBar style="auto" />
          <View style={login.avatarContainer}>
            <Image source={require('../../../assets/testeIcon.png')}
              style={login.logo}
              resizeMode="contain"
            />
          </View>
          <Line/>
          <View style={login.actionCard}>
            <InputComponent label="Email" placeholder="Digite o seu email" />
            <InputComponent label="Senha" placeholder="Digite a sua senha" />
            <ButtonComponent title="Efetuar login" onPress={UpdatingData} />
            <View style={login.registerContainer} >
              <Text style={login.registerText} onPress={() => navigation.navigate('Register')}>
                Não tem uma conta? Registre-se
              </Text>
            </View>
          </View>
      </View>
    
  );
}




