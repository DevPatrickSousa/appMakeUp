import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { laws } from './styles';
import {  Card } from '@rneui/themed';
import ButtonComponent from '../../components/ButtonComponent';

export default function Laws() {

    //import fonts
    const [loaded] = useFonts({
        nunito: require('../../fonts/Nunito-VariableFont_wght.ttf'),
        nunitoItalic: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
        montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
        OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
    });

    //texts states
    const [myFirstText, setMyFirstText] = useState("Lei Maria da Penha");
    const [mySecondText, setMySecondText] = useState("Lei Carolina Dieckmann");
    const [myThirdText, setMyThirdText] = useState("Lei Joana Maranhão");

    //images states
    const [FirstImageSource, setMyFirstImageSource] = useState(require('/assets/mariaPenha.jpeg'));
    const [SecondImageSource, setMySecondImageSource] = useState(require('/assets/carolina-d.jpg'));
    const [ThirdImageSource, setMyThirdImageSource] = useState(require('/assets/leiJoannaMaranhao.png'));

    return (
        <SafeAreaView style={laws.container}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={laws.scrollViewContainer}>
            <View style={laws.cardContainer}>
                <Card containerStyle={laws.cardContainerStyle}>
                    <Card.Title style={laws.title}>{myFirstText} <Text style={laws.importantText}>(11.340/2006)</Text></Card.Title>
                    <Card.Divider color='#FFFF'/>
                    <Card.Image
                                style={laws.cardImage}  
                                source={FirstImageSource}
                            />
                    <Text style={laws.text}>
                    Cria mecanismos para coibir a violência doméstica e familiar contra a mulher e estabelece medidas de assistência e proteção.
                    </Text>
                    <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                </Card>
            </View>

            <View style={laws.cardContainer}>
                <Card containerStyle={laws.cardContainerStyle}>
                    <Card.Title style={laws.title}>{mySecondText} <Text style={laws.importantText}>(11.340/2006)</Text></Card.Title>
                    <Card.Divider color='#FFFF'/>
                    <Card.Image
                                style={laws.cardImage}  
                                source={SecondImageSource}
                            />
                    <Text style={laws.text}>
                    Cria mecanismos para coibir a violência doméstica e familiar contra a mulher e estabelece medidas de assistência e proteção.
                    </Text>
                    <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                </Card>
            </View>

            <View style={laws.cardContainer}>
                <Card containerStyle={laws.cardContainerStyle}>
                    <Card.Title style={laws.title}>{myThirdText} <Text style={laws.importantText}>(11.340/2006)</Text></Card.Title>
                    <Card.Divider color='#FFFF'/>
                    <Card.Image
                                style={laws.cardImage}  
                                source={ThirdImageSource}
                            />
                    <Text style={laws.text}>
                    Cria mecanismos para coibir a violência doméstica e familiar contra a mulher e estabelece medidas de assistência e proteção.
                    </Text>
                    <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                </Card>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}
