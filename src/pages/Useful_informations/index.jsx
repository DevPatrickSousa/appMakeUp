//imports

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { UsefulInformationsStyles } from './styles';
import Line from '../../components/Line';


export default function UsefulInformations() {

    //import fonts

    const [loaded] = useFonts({
        nunito: require('../../fonts/Nunito-VariableFont_wght.ttf'),
        nunitoItalic: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
        montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
        OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
    });

    //declaring hooks - useState

    const [myFirstText, setMyFirstText] = useState("N° de colaboradores para te atender");
    const [mySecondText, setMySecondText] = useState("N° de tonalidades de pele");
    const [myThirdText, setMyThirdText] = useState("Departamento de moda");
    const [myFourthText, setMyFourthText] = useState("Central de atendimento");
    const [myFifthText, setMyFifthText] = useState("Reclame aqui");
    const [hideText, setHideText] = useState(false);

    //function to show the SOS numbers.

    function showMoreInformation() {
        setMyFirstText("Central de atendimento a mulher");
        setMySecondText("Polícia militar")
        setMyThirdText("Bombeiros")
        setMyFourthText("Defensoria pública")
        setMyFifthText("Disque denúncia")
        setHideText(true)
    }

    //function to hide the SOS numbers.

    function showLessInformation() {
        setMyFirstText("N° de colaboradores para te atender");
        setMySecondText("N° de tonalidades de pele")
        setMyThirdText("Departamento de moda")
        setMyFourthText("Central de atendimento")
        setMyFifthText("Reclame aqui")
        setHideText(false)
    }

    return (
        <SafeAreaView style={UsefulInformationsStyles.container}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={UsefulInformationsStyles.scrollViewContainer}>
                <View>
                    {hideText
                        ?
                        <Text style={UsefulInformationsStyles.title} onPress={showLessInformation}>Menos informações</Text>
                        :
                        <Text style={UsefulInformationsStyles.title} onPress={showMoreInformation}>Mais informações</Text>
                    }
                </View>
                <View style={UsefulInformationsStyles.cardContainer}>
                    <ScrollView contentContainerStyle={UsefulInformationsStyles.card}>
                        <Text style={UsefulInformationsStyles.title}>
                            {myFirstText}
                        </Text>
                        <Line/>
                        <Text style={UsefulInformationsStyles.cardContent} h2>
                            180                        
                        </Text>
                    </ScrollView>
                </View>
                <View style={UsefulInformationsStyles.cardContainer}>
                    <ScrollView contentContainerStyle={UsefulInformationsStyles.card}>
                        <Text style={UsefulInformationsStyles.title}>
                            {mySecondText}
                        </Text>
                        <Line/>
                        <Text style={UsefulInformationsStyles.cardContent} h2>
                            190                        
                        </Text>
                    </ScrollView>
                </View>
                <View style={UsefulInformationsStyles.cardContainer}>
                    <ScrollView contentContainerStyle={UsefulInformationsStyles.card}>
                        <Text style={UsefulInformationsStyles.title}>
                            {myThirdText}
                        </Text>
                        <Line/>
                        <Text style={UsefulInformationsStyles.cardContent} h2>
                            193                        
                        </Text>
                    </ScrollView>
                </View>
                <View style={UsefulInformationsStyles.cardContainer}>
                    <ScrollView contentContainerStyle={UsefulInformationsStyles.card}>
                        <Text style={UsefulInformationsStyles.title}>
                            {myFourthText}
                        </Text>
                        <Line/>
                        <Text style={UsefulInformationsStyles.cardContent} h2>
                            0800 773 4340                        
                        </Text>
                    </ScrollView>
                </View>
                <View style={UsefulInformationsStyles.cardContainer}>
                    <ScrollView contentContainerStyle={UsefulInformationsStyles.card}>
                        <Text style={UsefulInformationsStyles.title}>
                            {myFifthText}
                        </Text>
                        <Line/>
                        <Text style={UsefulInformationsStyles.cardContent} h2>
                            181                        
                        </Text>
                    </ScrollView>
                </View>
                <Line></Line>
            </ScrollView>
        </SafeAreaView>
    );
}



