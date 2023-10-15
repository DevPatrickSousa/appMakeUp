import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { home } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Card, Avatar } from '@rneui/themed';


export default function Home() {
  const [loaded] = useFonts({
    nunito: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
    montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });

  const navigation = useNavigation();

  function goToProfilePage() {
    navigation.navigate('Profile');
  }
  
  function goToUsefulInformations(){
    navigation.navigate('UsefulInformations')
  }

  return (
    <View style={home.container}> 
      <StatusBar style="auto" />
      <Avatar
        size={32}
        source={require('../../../assets/info.png')}
        onPress={goToUsefulInformations}
        containerStyle={home.info}
      />

      <View style={home.avatarContainer}>
        <Image source={require('../../../assets/logoMaybePurple.png')}
          style={home.logo}
        />
        <View style={home.appMakeUp}>
          <Text style={home.textAppMakeUp}>
            AppMakeUp
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('EmergencyContacts')}>
        <Card containerStyle={home.card}>
          <Avatar
            size={32}
            source={require('../../../assets/mascara.png')}
          />

          <Card.Title style={home.title}>Tutorial de primeira MakeUp</Card.Title>

          <Text style={home.text}>
            Veja como fazer maquiagem
            passo-a-passo e saiba quais as
            dicas a seguir para fazer uma
            maquiagem para a noite e para o dia.
          </Text>
        </Card>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => alert('teste')} style={home.hoverButton}>
        <Card containerStyle={home.card} onPress={() => alert('teste')}>
          <Avatar
            size={32}
            source={require('../../../assets/powder.png')}
            iconStyle={home.powder}
          />

          <Card.Title style={home.title}>Grave seus passos a passos</Card.Title>

          <Text style={home.text}>
            Faça você mesmo os passos de como fazer uma Makeup,
            podendo indicar também se essa maquiagem é para o dia ou para a noite.
          </Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
