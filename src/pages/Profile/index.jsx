import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, Text, View, Button, Image } from "react-native";
import {profile} from "./styles"
import ButtonComponent from "../../components/ButtonComponent/index"
import Line from '../../components/Line';
import InputComponent from '../../components/InputComponent/index';
import { useFocusEffect } from "@react-navigation/native";

export default function Profile(){
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      step,
    },
  });

  const formSteps = [
    {
      title: "Informações pessoais",
      content: (
        <View style={profile.action}>
          <InputComponent label="Nome" placeholder="Digite o nome do contato" />
          <InputComponent label="Telefone" placeholder="Digite o telefone" />
          <ButtonComponent onRightIconPress={nextStep} right={true} title="contato 1"/>
        </View>
      ),
    },
    {
      title: "Endereço",
      content: (
        <View style={profile.action}>
          <InputComponent label="Nome" placeholder="Digite o nome do contato" />
          <InputComponent label="Telefone" placeholder="Digite o telefone" />
          <ButtonComponent onRightIconPress={nextStep} onLeftIconPress={previousStep} left={true} right={true} title="contato 2"/>
          
          
        </View>
      ),
    },
    {
      title: "Pagamento",
      content: (
        <View style={profile.action}>
          <InputComponent label="Nome" placeholder="Digite o nome do contato" />
          <InputComponent label="Telefone" placeholder="Digite o telefone" />
          <ButtonComponent onLeftIconPress={previousStep} left={true} title="contato 3"/>
          
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
    const contato = {"nome": "Dybala", "telefone": "(11)2222-2222"}
    const updatedData = [
      ...data,
      contato
    ]
    setData(updatedData);
    console.log(updatedData);
    setStep(step + 1);
  }
  //fazer com que toda vez que a tela de profile for aberta os steps e o objeto dada sejam resetados.
  useFocusEffect(
    React.useCallback(() => {
      setStep(0);
      setData([]);
    }, [])
  );

  return (
    
      <View style={profile.container}>
        <View style={profile.avatarContainer}>
              <Image source={require('../../../assets/testeIcon.png')}
                style={profile.logo}
                resizeMode="contain"
              />
        </View>
        <Line/>
        {formSteps[step].content}

      </View>
   
  );
};