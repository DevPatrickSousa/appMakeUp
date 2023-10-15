import React, { useState, useEffect } from "react";
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { View, Image } from 'react-native';
import { getToken, removeToken } from '../../utils/auth';
import { loggoutStyles } from "./styles";
import ButtonComponent from "../../components/ButtonComponent";
import Line from "../../components/Line";
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

export default function Loggout(){

    const [visible, setVisible] = React.useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigation = useNavigation();

    async function goToHomePage() {
      navigation.navigate('Home');
    }

    async function closeDialog(){
      setVisible(false);
    }

    async function openDialog(){
      setVisible(true);
    }

    async function userLogout(){
      try {
        await removeToken();
        Toast.show({
          type: 'success',
          text1: 'Usuário saiu do sistema com sucesso.',
          text2: 'Você será redirecionado para a tela inicial em instantes.'
        });
        await closeDialog();
        setIsAuthenticated(false);
        setTimeout(() => {
          goToHomePage();
        }, 2000);
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Erro ao fazer logout.',
          text2: 'Erro ao fazer logout, tente novamente.'
        });
      }
    }

    useEffect(() => {
        getToken();
        openDialog();
    }, []);

    return (
        <PaperProvider>
          <View style={loggoutStyles.loggoutContainer}>
            <View style={loggoutStyles.imageContainer}>
              <Image source={require('../../../assets/logoMaybePurple.png')}
                  style={loggoutStyles.logo}
              />
            </View>
            <Portal>
              <Dialog style={loggoutStyles.dialog} visible={visible} onDismiss={closeDialog}>
                <Dialog.Title style={loggoutStyles.title}>Deseja realmente sair?</Dialog.Title>
                <Line/>
                <Dialog.Actions style={loggoutStyles.buttonActions}>
                  <ButtonComponent title="Não" minWidthContainer="100%" minHeight="50px" onPress={closeDialog}/>
                  <Line/>
                  <ButtonComponent title="Sim" minWidthContainer="100%" minHeight="50px" onPress={userLogout}/>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            <View style={loggoutStyles.appMakeUp}>
                <Text style={loggoutStyles.textAppMakeUp}>
                    AppMakeUp
                </Text>
            </View>
          </View>
        </PaperProvider>
      );
   
}
