import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { home } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AUTHENTICATION, CONTENT_TYPE, PHONE_NUMBER, API_KEY } from '@env';
import { Card, Avatar } from '@rneui/themed';
import { setToken, removeToken, getToken } from '../../utils/auth';
import Toast from 'react-native-toast-message';
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import Line from "../../components/Line";
import ButtonComponent from "../../components/ButtonComponent";
import LoadingComponent from "../../components/LoadingComponent";
import api from '../../../services/api';
import { Document, ImageRun, TextRun, Packer, Paragraph } from "docx";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

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

  function goToInformationsPage() {
    navigation.navigate('Informations');
  }

  async function closeDialog() {
    setVisible(false);
  }

  async function createDocx() {
    const nome = 'Patrick'

    let doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun(nome)
              ]
            }),
          ],
        },
      ],
    });
  
    Packer.toBase64String(doc).then((base64) => {
      const fileName = FileSystem.documentDirectory + "emergencyDocPrototype.docx"
      FileSystem.writeAsStringAsync(fileName, base64, {
        encoding: FileSystem.EncodingType.Base64
      }).then(() => {
        Sharing.shareAsync(fileName);
      }).catch((error) =>{
        console.error(error);
      })
    })
  }
  
  async function help() {
    await sendSMS();
    await createDocx();
  }

  async function sendSMS() {
    const token = await setToken();

    let option = { headers: { 'Content-Type': [CONTENT_TYPE], 'authorization': 'Bearer ' + token } }

    const data = {
      msg: 'ESTOU EM PERIGO, POR FAVOR ME AJUDE!'
    }

    await api.post(`/sendMsg/sos/${PHONE_NUMBER}?key=${API_KEY}`, data, option)
      .then((res) => {
        Toast.show({
          type: 'success',
          text1: 'Mensagem enviada com sucesso!',
        });
      })
      .catch((error) => {
        console.error(error);
        Toast.show({
          type: 'error',
          text1: 'Erro ao enviar mensagem!',
          text2: 'Favor tentar novamente.'
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

    const interval = setInterval(() => {
      checkToken();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
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
        <TouchableOpacity onPress={() => { isAuthenticated === true ? goToProfilePage() : Toast.show({ type: 'error', text1: 'Erro.',
          text2: 'Necessário realizar o login para poder acessar.'
        }); }}>
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

        <TouchableOpacity onPress={help} style={home.hoverButton}>
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
      </View>
    </View>
  );
}
