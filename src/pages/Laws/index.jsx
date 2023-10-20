import { ScrollView, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState, useEffect, useRef } from 'react';
import { laws } from './styles';
import {  Card } from '@rneui/themed';
import ButtonComponent from '../../components/ButtonComponent';
import { useFocusEffect } from "@react-navigation/native";

export default function Laws() {

    //import fonts
    const [loaded] = useFonts({
        nunito: require('../../fonts/Nunito-VariableFont_wght.ttf'),
        nunitoItalic: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
        montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
        OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
    });

    //actions states
    const [hideText, setHideText] = useState(false);
    const [buttonText, setButtonText] = useState("Mais detalhes");
    const scrollViewRef = useRef(null);

    //texts states
    const [myFirstText, setMyFirstText] = useState("Leis da Beleza: Explorando o Mundo da Maquiagem");
    const [mySecondText, setMySecondText] = useState("Regras e Regulamentos da Maquiagem Profissional");
    const [myThirdText, setMyThirdText] = useState("Leis da Maquiagem Artística: Regras para a Expressão Criativa através das Cores");

    //detailed texts states
    const [myFirstDetailedText, setMyFirstDetailedText] = useState("Explore as leis não escritas da beleza e da maquiagem que ditam padrões estéticos e culturais em todo o mundo. Descubra como a maquiagem molda a percepção da beleza e a autoexpressão.");
    const [mySecondDetailedText, setMySecondDetailedText] = useState("Conheça as regras e regulamentos que governam a indústria da maquiagem profissional. Saiba como se tornar uma maquiadora licenciado e cumprir as normas de higiene e segurança.");
    const [myThirdDetailedText, setMyThirdDetailedText] = useState('Explore as "leis" da maquiagem artística, onde a criatividade encontra a disciplina. Experimente com cores vibrantes e técnicas ousadas enquanto observa os princípios que governam essa forma única de arte.');

    //images states
    const [FirstImageSource, setMyFirstImageSource] = useState(require('../../../assets/leisBeleza.jpg'));
    const [SecondImageSource, setMySecondImageSource] = useState(require('../../../assets/regrasMakeUp.jpg'));
    const [ThirdImageSource, setMyThirdImageSource] = useState(require('../../../assets/artisticMakeUp.jpg'));

    //function to show the informations.
    function showMoreInformations() {
        setHideText(true);
        setMyFirstText("Lei Maria da Penha");
        setMyFirstDetailedText('A Lei Maria da Penha é uma legislação brasileira que visa proteger as mulheres contra a violência doméstica e familiar. Ela estabelece medidas de prevenção, punição e assistência às vítimas, garantindo seus direitos e segurança.');
        setMySecondText("Lei Carolina Dieckmann");
        setMySecondDetailedText("A Lei Carolina Dieckmann, oficialmente conhecida como Lei nº 12.737/2012, é uma legislação brasileira que define crimes cibernéticos, incluindo a invasão de dispositivos eletrônicos e a divulgação não autorizada de informações pessoais na internet.");
        setMyThirdText("Lei Joana Maranhão");
        setMyThirdDetailedText("A Lei Joanna Maranhão é uma legislação importante que estabelece um prazo de prescrição mais favorável para vítimas de abuso sexual infantil no Brasil. Esta lei foi uma conquista significativa na proteção de crianças e adolescentes, permitindo que as vítimas tenham mais tempo para denunciar e buscar justiça contra seus agressores.");
        setMyFirstImageSource(require('../../../assets/mariaPenha.jpeg'));
        setMySecondImageSource(require('../../../assets/carolina-d.jpg'));
        setMyThirdImageSource(require('../../../assets/leiJoannaMaranhao.png'));
    }

    //function to hide the informations.
    function showLessInformations() {
        setHideText(false)
        setMyFirstText("Leis da Beleza: Explorando o Mundo da Maquiagem");
        setMyFirstDetailedText("Explore as leis não escritas da beleza e da maquiagem que ditam padrões estéticos e culturais em todo o mundo. Descubra como a maquiagem molda a percepção da beleza e a autoexpressão.");
        setMySecondText("Regras e Regulamentos da Maquiagem Profissional");
        setMySecondDetailedText("Conheça as regras e regulamentos que governam a indústria da maquiagem profissional. Saiba como se tornar uma maquiadora licenciado e cumprir as normas de higiene e segurança.");
        setMyThirdText("Direitos e Deveres dos Maquiadores: Um Guia Legal");
        setMyThirdDetailedText('Explore as "leis" da maquiagem artística, onde a criatividade encontra a disciplina. Experimente com cores vibrantes e técnicas ousadas enquanto observa os princípios que governam essa forma única de arte.');
        setMyFirstImageSource(require('../../../assets/leisBeleza.jpg'));
        setMySecondImageSource(require('../../../assets/regrasMakeUp.jpg'));
        setMyThirdImageSource(require('../../../assets/artisticMakeUp.jpg'));
    }

    //function to go back to the top.
    function scrollToTop() {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true, duration: 1000 });
        }
      }
    
    //function to can reset the states when change the page.
    function resetStates() {
        setHideText(false);
        setButtonText("Mais detalhes");
        setMyFirstText("Leis da Beleza: Explorando o Mundo da Maquiagem");
        setMyFirstDetailedText("Explore as leis não escritas da beleza e da maquiagem que ditam padrões estéticos e culturais em todo o mundo. Descubra como a maquiagem molda a percepção da beleza e a autoexpressão.");
        setMySecondText("Regras e Regulamentos da Maquiagem Profissional");
        setMySecondDetailedText("Conheça as regras e regulamentos que governam a indústria da maquiagem profissional. Saiba como se tornar uma maquiadora licenciado e cumprir as normas de higiene e segurança.");
        setMyThirdText("Direitos e Deveres dos Maquiadores: Um Guia Legal");
        setMyThirdDetailedText('Explore as "leis" da maquiagem artística, onde a criatividade encontra a disciplina. Experimente com cores vibrantes e técnicas ousadas enquanto observa os princípios que governam essa forma única de arte.');
        setMyFirstImageSource(require('../../../assets/leisBeleza.jpg'));
        setMySecondImageSource(require('../../../assets/regrasMakeUp.jpg'));
        setMyThirdImageSource(require('../../../assets/artisticMakeUp.jpg'));
    }

    //using useEffect to can reset the values
    useFocusEffect(
        React.useCallback(() => {
            resetStates();
            scrollToTop();
        }, [])
      );

    return (
        <SafeAreaView style={laws.container}>
            <ScrollView contentContainerStyle={laws.scrollViewContainer} ref={scrollViewRef}>
            <View style={laws.cardContainer}>
                <Card containerStyle={laws.cardContainerStyle}>
                    <Card.Title style={laws.title}>{myFirstText} <Text style={laws.importantText}>{hideText === true ? '(11.340/2006)' : null}</Text></Card.Title>
                    <Card.Divider color='#FFFF'/>
                    <Card.Image
                                style={laws.cardImage}  
                                source={FirstImageSource}
                            />
                    <Text style={laws.text}>
                    {myFirstDetailedText}
                    </Text>
                    <ButtonComponent title='Saiba mais' name='arrow-right' color="#e989ff" borderRadius={10} minWidth={200} maxWidth={'auto'}/>
                </Card>
            </View>

            <View style={laws.cardContainer}>
                <Card containerStyle={laws.cardContainerStyle}>
                    <Card.Title style={laws.title}>{mySecondText} <Text style={laws.importantText}>{hideText === true ? '(12.737/2012)' : null}</Text></Card.Title>
                    <Card.Divider color='#FFFF'/>
                    <Card.Image
                                style={laws.cardImage}  
                                source={SecondImageSource}
                            />
                    <Text style={laws.text}>
                    {mySecondDetailedText}
                    </Text>
                    <ButtonComponent title='Saiba mais' name='arrow-right' color="#e989ff" borderRadius={10} minWidth={200} maxWidth={'auto'}/>
                </Card>
            </View>

            <View style={laws.cardContainer}>
                <Card containerStyle={laws.cardContainerStyle}>
                    <Card.Title style={laws.title}>{myThirdText} <Text style={laws.importantText}>{hideText === true ? '(12.650/2012)' : null}</Text></Card.Title>
                    <Card.Divider color='#FFFF'/>
                    <Card.Image
                                style={laws.cardImage}  
                                source={ThirdImageSource}
                            />
                    <Text style={laws.text}>
                    {myThirdDetailedText}
                    </Text>
                    <ButtonComponent title='Saiba mais' name='arrow-right' color="#e989ff" borderRadius={10} minWidth={200} maxWidth={'auto'}/>
                </Card>
            </View>

            <View style={laws.buttonContainer}>
                    <ButtonComponent 
                        maxWidth={220}
                        minWidth={220}
                        maxHeight={40}
                        minHeight={40}
                        color="#e989ff" 
                        borderRadius={10} 
                        borderColor='#ffbbca' 
                        title={buttonText} 
                        onPress={() => {
                            if (hideText === false) {
                                showMoreInformations();
                                setButtonText("Menos detalhes");
                            } else {
                                showLessInformations();
                                setButtonText("Mais detalhes");
                            }
                            scrollToTop();
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
