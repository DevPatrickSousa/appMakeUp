//imports

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";
import { login } from './styles';
import { Card } from '@rneui/themed';
import Line from '../../components/Line';
export default function Login() {
  function UpdatingData() {
    alert('teste');
  }

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
              <Text style={login.registerText} onPress={UpdatingData}>
                Não tem uma conta? Registre-se
              </Text>
            </View>
          </View>
      </View>
    
  );
}




