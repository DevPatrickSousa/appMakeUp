import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { home } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AUTHENTICATION, CONTENT_TYPE, PHONE_NUMBER, API_KEY, GOOGLE_API_KEY } from '@env';
import { Card, Avatar } from '@rneui/themed';
import { setToken, removeToken, getToken, getUser, removeUser } from '../../utils/auth';
import Toast from 'react-native-toast-message';
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import Line from "../../components/Line";
import ButtonComponent from "../../components/ButtonComponent";
import LoadingComponent from "../../components/LoadingComponent";
import api from '../../../services/api';
import { Document, ImageRun, TextRun, Packer, Paragraph, AlignmentType, HeadingLevel, Header, SimpleField} from "docx";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Audio } from 'expo-av';
import { format } from 'date-fns';

export default function Home(){
  const [loaded] = useFonts({
    nunito: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
    montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
    OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const navigation = useNavigation();

  function goToProfilePage(){
    navigation.navigate('Profile');
  }

  function goToInformationsPage(){
    navigation.navigate('Informations');
  }

  async function closeDialog(){
    setVisible(false);
  }

  async function createDocx(){
    const title = 'BOLETIM DE OCORRÊNCIA';
    let nome = "xxxxxx";
    let idade = "xx";
    let email = "xxxxxx@xxxx.com";
    let num = "(xx)xxxxx-xxxx";
    const detalhes = "Esta é uma mensagem padrão apenas para exemplificar."

    const today = new Date();

    const formattedDate = format(today, 'dd/MM/yyyy');

      if(isAuthenticated){
        userData = JSON.parse(user);
        nome = userData.nome;
        idade = userData.idade.toString();
        email = userData.email;
        num = userData.telefone.toString();
      }

      const defaultInformations = {
        nome: "Nome: ",
        idade: "Idade: ",
        email: "Email: ",
        telefone: "Telefone: ",
        data: "Data do fato: ",
        detalhes: "Detalhes do ocorrido: "
      }

      const black = "000000";
  
      let doc = new Document({
        background: {
          color: "FFFFFF",
        },
        sections: [{
          headers: {
            default: new Header({
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.TITLE,
                    children: [
                      new TextRun({text:title, color:black}),
                    ],
                    border: {
                      top: {
                          color: "auto",
                          space: 1,
                          value: "single",
                          size: 6,
                      },
                      bottom: {
                          color: "auto",
                          space: 1,
                          value: "single",
                          size: 6,
                      },
                      left: {
                          color: "auto",
                          space: 1,
                          value: "single",
                          size: 6,
                      },
                      right: {
                          color: "auto",
                          space: 1,
                          value: "single",
                          size: 6,
                      },
                  },
                  })
                ],
            }),
          },
            children: [
              new Paragraph({
                children: [
                  new TextRun({text:defaultInformations.nome, color:black, size: 28,}),
                  new TextRun({text:nome, color:black, size: 20,}),
                ],
                spacing: {
                  before: 300,
                },
              }),
              new Paragraph({
                children: [
                  new TextRun({text:defaultInformations.idade, color:black, size: 28,}),
                  new TextRun({text:idade, color:black, size: 20,}),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({text:defaultInformations.email, color:black, size: 28,}),
                  new TextRun({text:email, color:black, size: 20,}),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({text:defaultInformations.telefone, color:black, size: 28,}),
                  new TextRun({text:num, color:black, size: 20,}),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({text:defaultInformations.data, color:black, size: 28,}),
                  new TextRun({text:formattedDate, color:black, size: 20,}),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({text:defaultInformations.detalhes, color:black, size: 28,}),
                  new TextRun({text:detalhes, color:black, size: 20,}),
                ],
              }),
            ],
          },
        ],
      });
  
      await Packer.toBase64String(doc).then((base64) => {
        const fileName = FileSystem.documentDirectory + 'boletim_de_ocorrencia.docx';
        FileSystem.writeAsStringAsync(fileName, base64, {
          encoding: FileSystem.EncodingType.Base64,
        })
          .then(() => {
            Sharing.shareAsync(fileName);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }
  
  async function help(){
   try{
    await sendSMS();
    await createDocx();
   }catch(error) {
    Toast.show({
      type: 'error',
      text1: 'Erro, favor tentar novamente.',
    });
   }
  }

  async function sendSMS(){
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
      })
      .finally(async () => {
        await closeDialog();
        await removeToken();
      })
  }

  async function transcribeAudio(audioUri){
    try{
      const apiKey = GOOGLE_API_KEY;

      const audioBase64 = await FileSystem.readAsStringAsync(audioUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      
      const body = {

        // "config": {
        //   "encoding": "LINEAR16",
        //   "sampleRate": 41000,
        //   "languageCode": "pt-BR"
        // },
        // "audio": {
        //   "content": audioBase64
        // }

          "config": {
              "encoding": "FLAC",
              "sampleRateHertz": 16000,
              "languageCode": "en-US",
          },
          "audio": {
            "uri":"gs://cloud-samples-tests/speech/brooklyn.flac"
        }
      
      };
      
      const transcriptResponse = await fetch(
        `https://speech.googleapis.com/v1p1beta1/speech:recognize?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      const data = await transcriptResponse.json();
      
      const message = data.results && data.results[0].alternatives[0].transcript || "";

      //message: how old is the Brooklyn Bridge

      //definindo a keyword, nesse caso "Brooklyn";
      // if(message.includes('Brooklyn')){
      //   sendSMS();
      // }
    }catch(error){
      console.error("Error transcribing audio:", error);
    }
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      const authenticated = !!token;
      setIsAuthenticated(authenticated);
  
      if(!authenticated){
        await removeUser();
      }
    };
    checkToken();

    const checkUser = async () => {
      const user = await getUser();
      if(user){
        setUser(user);
      }else{
        setUser({});
      }
    };
    checkUser();

    const interval = setInterval(() => {
      checkToken();
      checkUser();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      let recordingInstance = null;

      recordingOptions = {
        isMeteringEnabled: true,
        android: {
          extension: '.m4a',
          outputFormat: Audio.AndroidOutputFormat.MPEG_4,
          audioEncoder: Audio.AndroidAudioEncoder.AAC,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.m4a',
          outputFormat: Audio.IOSOutputFormat.MPEG4AAC,
          audioQuality: Audio.IOSAudioQuality.MAX,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: {
          mimeType: 'audio/webm',
          bitsPerSecond: 128000,
        },
      };
  
      const startRecording = async () => {
        try{
          await Audio.requestPermissionsAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            playThroughEarpieceAndroid: true,
          });
  
          if(!recordingInstance){
            //starting to record
            recordingInstance = new Audio.Recording();
            await recordingInstance.prepareToRecordAsync(recordingOptions);
            await recordingInstance.startAsync();
          }else{
            Toast.show({
              type: 'Erro',
              text1: 'Existe uma gravação em andamento!',
            });
          }
        }catch(error){
          console.error('Failed to start recording', error);
        }
      };
  
      startRecording();
  
      return async () => {
        //stopping to record
        if(recordingInstance){
          try{
            await recordingInstance.stopAndUnloadAsync();
            const uri = recordingInstance.getURI();
            if(uri){
              //playing audio
              const {sound} = await Audio.Sound.createAsync({uri: uri}, {shouldPlay: true});
              await sound.setPositionAsync(0);
              await sound.playAsync();
              await transcribeAudio(uri);
            }
          }catch(error){
            console.error('Failed to stop recording', error);
          }finally{
            recordingInstance = null;
          }
        }
      };
    }, [])
  );
  
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
