//imports

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from "../../components/ButtonComponent/index";
import { register } from './styles';
import { Card } from '@rneui/themed';
import Line from '../../components/Line';
export default function Register() {
  function UpdatingData() {
    alert('teste');
  }

  return (
      <View style={register.cardContainer}>
        <StatusBar style="auto" />
          <View style={register.avatarContainer}>
            <Image source={require('../../../assets/testeIcon.png')}
              style={register.logo}
            />
          </View>
          <Line/>
          <View style={register.actionCard}>
            <InputComponent label="Nome" placeholder="Digite o seu Nome" />
            <InputComponent label="Idade" placeholder="Digite a sua Idade" />
            <InputComponent label="Email" placeholder="Digite o seu email" />
            <InputComponent label="Senha" placeholder="Digite a sua senha" />
            <InputComponent label="Telefone" placeholder="Digite o seu telefone" />
            <ButtonComponent title="Cadastrar" onPress={UpdatingData} />
            <View style={register.registerContainer} >
              <Text style={register.registerText} onPress={UpdatingData}>
                Já possui uma conta? faça o login.
              </Text>
            </View>
          </View>
      </View>
    
  );
}




