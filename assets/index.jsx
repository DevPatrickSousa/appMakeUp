import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Avatar } from '@rneui/themed';
import { useFonts } from 'expo-font';
import api from '../../Services/api'
import axios from 'axios'
import ButtonComponent from "../../components/ButtonComponent/index"

export default function Home() {
  const [loaded] = useFonts({
    nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });
  const navigation = useNavigation();
  function goToProfilePage() {
    navigation.navigate('Profile');
    

  }

  async function testeAPI() {
    
    try {
      const res = await api.get('/');
      console.log(res)
    } catch (error) {
      console.error(error)
    }

  }


  
  return (
    <View style={styles.container}>



      <Avatar
        size={32}
        source={require('../../assets/info.png')}
        onPress={() => navigation.navigate("Usefulnformations") && console.log('teste')}
        containerStyle={styles.info}
      />


      <Image source={require('../../assets/testeIcon.png')}
        style={styles.logo}
      />
      <TouchableOpacity onPress={() => navigation.navigate('EmergencyContacts')}>
        <Card containerStyle={styles.card}
        >

          <Avatar
            size={32}

            source={require('../../assets/mascara.png')}

          />
          <Card.Title style={styles.title}>Tutorial de primeira MakeUp</Card.Title>


          <Text style={styles.text}>
            Veja como fazer maquiagem
            passo-a-passo e saiba quais as
            dicas a seguir para fazer uma
            maquiagem para a noite e para o dia.
          </Text>



        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('teste')} style={styles.hoverButton}>

        <Card containerStyle={styles.card} onPress={() => alert('teste')}
        >
          <Avatar
            size={32}
            source={require('../../assets/powder.png')}
            iconStyle={styles.powder}
          />
          <Card.Title style={styles.title}>Grave seus passos a passos</Card.Title>


          <Text style={styles.text}>
            Faça você mesmo os passos de como fazer uma Makeup,
            podendo indicar também se essa maquiagem é para o dia ou para a noite.
          </Text>

        </Card>
      </TouchableOpacity>

      <p></p>


      <ButtonComponent
        title="ATUALIZAR PERFIL"
        onPress={()=>{goToProfilePage();testeAPI();}} // when the button is clicked, the page is switched to Profile page.
      />



    </View>
  );
}

//styling Home page.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    width: 327,
    height: 182,
    backgroundColor: '#EA9AB2',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: 700,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: 'nunito',
    fontWeight: 400,
  },
  logo: {
    width: 194,
    height: 194,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,
    elevation: 1,
  },
  TouchableOpacity: {
    margin: 0,
    padding: 0
  },
  icon: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 320,
    top: 5
  }


});


