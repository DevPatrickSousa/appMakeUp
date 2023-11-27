import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, Text, View, Button, Image } from "react-native";
import {profile} from "./styles"
import ButtonComponent from "../../components/ButtonComponent/index"
import Line from '../../components/Line';
import InputComponent from '../../components/InputComponent/index';
import { useFocusEffect } from "@react-navigation/native";
import {AUTHENTICATION, CONTENT_TYPE, API_KEY} from '@env';
import api from '../../../services/api';
import { setToken, getToken } from "../../utils/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ isAuthenticated, navigation }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState([{}]);
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [id, setId] = useState('')

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      step,
    },
  });

  useEffect(async () => {
    const checkAuthentication = async () => {
      if (!isAuthenticated) {
        navigation.navigate('Login');
      }
    };
    checkAuthentication();
    const id = await AsyncStorage.getItem('user_id');
    setId(id);
  }, [isAuthenticated, navigation]);

  const formSteps = [
    {
      title: "Informações pessoais",
      content: (
        <View style={profile.actionCard}>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o nome do contato" value={name} onChangeText={(text) => setName(text)}/>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o telefone" inputMode='numeric' value={number} onChangeText={(text) => setNumber(text)}/>
          <ButtonComponent color="#e989ff" minWidth={200} minHeightButton={55} borderRadius={10} borderColor='#ffbbca' rightIconName="arrow-right" onRightIconPress={nextStep} title="contato 1"/>
        </View>
      ),
    },
    {
      title: "Endereço",
      content: (
        <View style={profile.actionCard}>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o nome do contato" value={name} onChangeText={(text) => setName(text)}/>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o telefone" inputMode='numeric' value={number} onChangeText={(text) => setNumber(text)}/>
          <ButtonComponent minWidth={200} minHeightButton={55} borderRadius={10} color="#e989ff" borderColor='#ffbbca' onRightIconPress={nextStep} onLeftIconPress={previousStep} leftIconName="arrow-left" rightIconName="arrow-right" title="contato 2"/>
        </View>
      ),
    },
    {
      title: "Pagamento",
      content: (
        <View style={profile.actionCard}>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o nome do contato" value={name} onChangeText={(text) => setName(text)}/>
          <InputComponent minWidthContainer={280} minHeight={55} placeholder="Digite o telefone" inputMode='numeric' value={number} onChangeText={(text) => setNumber(text)}/>
      
          <View style={profile.buttonContainer}>
          <ButtonComponent minWidth={150} minHeightButton={55} maxHeight={55} borderRadius={10} color="#e989ff" borderColor='#ffbbca' onLeftIconPress={previousStep} leftIconName="arrow-left" title="contato 3"/>
          <ButtonComponent minWidth={150} minHeightButton={55} maxHeight={55} borderRadius={10} color="#e989ff" borderColor='#ffbbca' onPress={saveContacts} title="salvar" />
          </View>
        </View>
      ),
    },
  ];

  function previousStep(){
    if (data.length > 0) {
      const updatedData = data.slice(0, -1);
      setData(updatedData);
    }
    setStep(step - 1)
  }

  function nextStep(){
    const contato = {"nome": name, "telefone": number, "id_pessoa": id}
    const updatedData = [
      ...data,
      contato,
    ]
    setData(updatedData);
    setName('');
    setNumber('');
    setStep(step + 1);
  }
  
  async function saveContacts() {
    const token = await getToken();
    const apiUrl = `/contacts?key=${API_KEY}`;

    const contato = {"nome": name, "telefone": number, "id_pessoa": id}

    const updatedData = [
      ...data,
      contato,
    ]

    setData(updatedData);
  
    const allContacts = updatedData.map(async (item) => {
      const option = {
        headers: {
          'Content-Type': CONTENT_TYPE,
          'authorization': 'Bearer ' + token
        }
      };
  
      try{
        await api.post(apiUrl, item, option);
      }catch(error){
        console.error('Error:', error);
      }
    });
  
    //waiting to request one-per-one of all the contacts 
    await Promise.all(allContacts); 
  }

  //everytime we re-open the page we clear the states.
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