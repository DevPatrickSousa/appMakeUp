import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { home } from './styles';
import { useNavigation } from '@react-navigation/native';
import {AUTHENTICATION, CONTENT_TYPE} from '@env';
import { Card, Avatar } from '@rneui/themed';
import { setToken, removeToken, getToken } from '../../utils/auth';
import Toast from 'react-native-toast-message';
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import Line from "../../components/Line";
import ButtonComponent from "../../components/ButtonComponent";
import LoadingComponent from "../../components/LoadingComponent";
import api from '../../../services/api';

export default function Home() {
  const [loaded] = useFonts({
    nunito: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
    montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function goToProfilePage() {
    navigation.navigate('Profile');
  }
  
  function goToInformationsPage(){
    navigation.navigate('Informations')
  }

  async function closeDialog(){
    setVisible(false);
    goToHomePage();
  }

  async function openDialog(){
    setVisible(true);
  }

  async function sendSMS(){
    const token = await setToken();

    let option = { headers: { 'Content-Type': [CONTENT_TYPE], 'authorization': 'Bearer ' + token } }

    const data = {
     msg:'ESTOU EM PERIGO, POR FAVOR ME AJUDE!'
    }

    await api.post('/sendMsg/sos/11943646430?key=4dm1n', data, option)
      .then((res) => {
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
      .finally(async () => {
        await removeToken();
        await closeDialog();
      })
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
    };
    checkToken();

    //every second we check the token status
    const interval = setInterval(() => {
      checkToken();
    }, 1000);

    //clear the interval on "unMounted"
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <PaperProvider>
    <View style={home.container}> 
      <Avatar
        size={32}
        source={require('../../../assets/info.png')}
        onPress={goToInformationsPage}
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
      <View style={home.cardsContainer}>
      <TouchableOpacity onPress={() => {isAuthenticated === true ? goToProfilePage() : Toast.show({type: 'error', text1: 'Erro.',
          text2: 'Necessário realizar o login para poder acessar.'
        });}}>
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
      
      <TouchableOpacity onPress={openDialog} style={home.hoverButton}>
        <Card containerStyle={home.card}>
          <Avatar
            size={32}
            source={require('../../../assets/powder.png')}
          />

          <Card.Title style={home.title}>Grave seus passos a passos</Card.Title>

          <Text style={home.text}>
            Faça você mesmo os passos de como fazer uma Makeup,
            podendo indicar também se essa maquiagem é para o dia ou para a noite.
          </Text>
        </Card>
      </TouchableOpacity>
      
        <Portal>
          <Dialog style={home.dialog} visible={visible}>
            <Dialog.Title style={home.title}>Deseja realmente sair?</Dialog.Title>
            <Line/>
            <Dialog.Actions style={home.buttonActions}>
              <ButtonComponent title="Não" minWidth={'100%'} minHeightButton={50} color="#e989ff" onPress={closeDialog}/>
              <Line/>
              <ButtonComponent title="Sim" minWidth={'100%'} minHeightButton={50} color="#e989ff" borderBottomStartRadius={10} borderBottomEndRadius={10} onPress={sendSMS} />
            </Dialog.Actions>
            <LoadingComponent visible={loading}/>
          </Dialog>
        </Portal>
      </View>
    </View>
    </PaperProvider>
  );
}
