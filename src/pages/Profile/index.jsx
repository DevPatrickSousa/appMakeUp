import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, Text, View, Button, Image } from "react-native";
import {profile} from "./styles"
import ButtonComponent from "../../components/ButtonComponent/index"
import Line from '../../components/Line';
import InputComponent from '../../components/InputComponent/index';
import { useFocusEffect } from "@react-navigation/native";
import {AUTHENTICATION, CONTENT_TYPE} from '@env';
import api from '../../../services/api';

export default function Profile({ isAuthenticated, navigation }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [token, setToken] = useState('');

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      step,
    },
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!isAuthenticated) {
        navigation.navigate('Login');
      }
    };
    checkAuthentication();
  }, [isAuthenticated, navigation]);


  const formSteps = [
    {
      title: "Informações pessoais",
      content: (
        <View style={profile.actionCard}>
          <InputComponent minHeight='55px' placeholder="Digite o nome do contato" value={name} onChangeText={(text) => setName(text)}/>
          <InputComponent minHeight='55px' placeholder="Digite o telefone" value={number} onChangeText={(text) => setNumber(text)}/>
          <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' onRightIconPress={nextStep} right={true} title="contato 1"/>
        </View>
      ),
    },
    {
      title: "Endereço",
      content: (
        <View style={profile.actionCard}>
          <InputComponent minHeight='55px' placeholder="Digite o nome do contato" value={name} onChangeText={(text) => setName(text)}/>
          <InputComponent minHeight='55px' placeholder="Digite o telefone" value={number} onChangeText={(text) => setNumber(text)}/>
          <ButtonComponent onRightIconPress={nextStep} onLeftIconPress={previousStep} left={true} right={true} title="contato 2"/>
        </View>
      ),
    },
    {
      title: "Pagamento",
      content: (
        <View style={profile.actionCard}>
          <InputComponent minHeight='55px' placeholder="Digite o nome do contato" value={name} onChangeText={(text) => setName(text)}/>
          <InputComponent minHeight='55px' placeholder="Digite o telefone" value={number} onChangeText={(text) => setNumber(text)}/>
          
          
          <View style={profile.buttonContainer}>
          <ButtonComponent minHeight='40px' minWidthContainer='150px' onLeftIconPress={previousStep} left={true} title="contato 3"/>
          <ButtonComponent minHeight='40px' minWidthContainer='150px' onPress={saveContacts} title="salvar" />
          </View>
        </View>
      ),
    },
  ];

  function previousStep(){
    if (data.length > 0) {
      const updatedData = data.slice(0, -1);
      setData(updatedData);
      console.log(updatedData);
    }
    setStep(step - 1)
  }
  function nextStep(){
    const contato = {"nome": name, "telefone": number}
    const updatedData = [
      ...data,
      contato
    ]
    setData(updatedData);
    console.log(updatedData);
    setName('');
    setNumber('');
    setStep(step + 1);
  }
  async function saveContacts(){
    let option = { headers: { 'Content-Type': CONTENT_TYPE, 'authorization': 'Bearer ' + token } }
    await api.get('/contacts?key=4dm1n', option)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  //fazer com que toda vez que a tela de profile for aberta os steps e o objeto data sejam resetados.
  useFocusEffect(
    React.useCallback(() => {
      setStep(0);
      setData([]);
    }, [])
  );

    return (
        <View style={profile.container}>
          <View style={profile.avatarContainer}>
                <Image source={require('../../../assets/logoMaybePurple.png')}
                  style={profile.logo}
                  resizeMode="contain"
                />
                <View style={profile.appMakeUp}>
                  <Text style={profile.textAppMakeUp}>
                    AppMakeUp
                  </Text>
                </View>
          </View>
          {formSteps[step].content}
        </View>
    
    );
};