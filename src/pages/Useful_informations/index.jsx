//imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {  Card, Button, Icon } from '@rneui/themed';
import { useFonts } from 'expo-font';
import React, { useState, useRef } from 'react';
import { UsefulInformationsStyles } from './styles';
import Line from '../../components/Line';
import ButtonComponent from '../../components/ButtonComponent';

export default function UsefulInformations() {

    //import fonts
    const [loaded] = useFonts({
        nunito: require('../../fonts/Nunito-VariableFont_wght.ttf'),
        nunitoItalic: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
        montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
        OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
    });

    //texts states
    const [myFirstText, setMyFirstText] = useState("N° de colaboradores para te atender");
    const [mySecondText, setMySecondText] = useState("N° de tonalidades de pele");
    const [myThirdText, setMyThirdText] = useState("Departamento de moda");
    const [myFourthText, setMyFourthText] = useState("Beauty show");

    //detailed texts states
    const [myFirstDetailedText, setMyFirstDetailedText] = useState("Se surpreenda com o número de colaboradores que temos por todo o brasil visando compartilhar suas técnicas incríveis.");
    const [mySecondDetailedText, setMySecondDetailedText] = useState("Acabe com a sua curiosidade em relação a todas as tonalidades de peles disponíveis em cosméticos voltados para a sua pele.");
    const [myThirdDetailedText, setMyThirdDetailedText] = useState('Veja em detalhes toda a estrutura do departamento de moda que tem como intuito estar sempre a frente quando se diz "estar na moda".');
    const [myFourthDetailedText, setMyFourthDetailedText] = useState("Venha se juntar a nós no Beauty Show, um evento emocionante que celebra a beleza em todas as suas formas.");

    //images states
    const [firstImageSource, setFirstImageSource] = useState(require('../../../assets/colaboradores.jpg'));
    const [secondImageSource, setMySecondImageSource] = useState(require('../../../assets/skinColor.jpeg'));
    const [ThirdImageSource, setMyThirdImageSource] = useState(require('../../../assets/fashion.jpg'));
    const [FourthImageSource, setMyFourthImageSource] = useState(require('../../../assets/beautyShow.png'));

    //actions states
    const [hideText, setHideText] = useState(false);
    const [buttonText, setButtonText] = useState("Mais detalhes");
    const scrollViewRef = useRef(null);

    //function to show the SOS numbers.
    function showMoreInformations() {
        setHideText(true);
        setMyFirstText("Central de atendimento a mulher");
        setMyFirstDetailedText('O número 180 é a Central de Atendimento à Mulher, uma linha telefônica dedicada a receber denúncias e prestar assistência a mulheres vítimas de violência.');
        setMySecondText("Polícia militar");
        setMySecondDetailedText("Para denunciar abusos, crimes, ou situações de emergência que exijam a intervenção imediata da Polícia Militar, ligue para o número 190.");
        setMyThirdText("Defensoria pública");
        setMyThirdDetailedText("O número 0800 773 4340 é a linha de atendimento gratuito da Defensoria Pública. Esta é uma instituição que oferece assistência jurídica e orientação legal para pessoas que não têm condições de pagar por serviços de advogados particulares.");
        setMyFourthText("Disque denúncia");
        setMyFourthDetailedText("O número 181 é o Disque Denúncia, uma linha telefônica dedicada a receber informações e denúncias sobre atividades criminosas e situações suspeitas.");
        setFirstImageSource(require('../../../assets/180.png'));
        setMySecondImageSource(require('../../../assets/190.png'));
        setMyThirdImageSource(require('../../../assets/defensoria.jpeg'));
        setMyFourthImageSource(require('../../../assets/disqueDenuncia.jpg'));
    }

    //function to hide the SOS numbers.
    function showLessInformations() {
        setHideText(false)
        setMyFirstText("N° de colaboradores para te atender");
        setMyFirstDetailedText("Se surpreenda com o número de colaboradores que temos por todo o brasil visando compartilhar suas técnicas incríveis.");
        setMySecondText("N° de tonalidades de pele");
        setMySecondDetailedText("Acabe com a sua curiosidade em relação a todas as tonalidades de peles disponíveis em cosméticos voltados para a sua pele.");
        setMyThirdText("Departamento de moda");
        setMyThirdDetailedText('Veja em detalhes toda a estrutura do departamento de moda que tem como intuito estar sempre a frente quando se diz "estar na moda".');
        setMyFourthText("Beauty show");
        setMyFourthDetailedText("Venha se juntar a nós no Beauty Show, um evento emocionante que celebra a beleza em todas as suas formas.");
        setFirstImageSource(require('../../../assets/colaboradores.jpg'));
        setMySecondImageSource(require('../../../assets/skinColor.jpeg'));
        setMyThirdImageSource(require('../../../assets/fashion.jpg'));
        setMyFourthImageSource(require('../../../assets/beautyShow.png'));
    }

    //function to go back to the top.
    function scrollToTop() {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
        }
      }

    return (
        <SafeAreaView style={UsefulInformationsStyles.container}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={UsefulInformationsStyles.scrollViewContainer} ref={scrollViewRef}>
                <View style={UsefulInformationsStyles.cardContainer}>
                        <Card containerStyle={UsefulInformationsStyles.cardContainerStyle}>
                            <Card.Title style={UsefulInformationsStyles.title}>{myFirstText}</Card.Title>
                            <Card.Divider color='#FFFF'/>
                            <Card.Image
                                style={UsefulInformationsStyles.cardImage}  
                                source={firstImageSource}
                            />
                            <Text style={UsefulInformationsStyles.text}>
                               {myFirstDetailedText}
                            </Text>
                            <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                        </Card>
                </View>

                <View style={UsefulInformationsStyles.cardContainer}>
                        <Card containerStyle={UsefulInformationsStyles.cardContainerStyle}>
                            <Card.Title style={UsefulInformationsStyles.title}>{mySecondText}</Card.Title>
                            <Card.Divider color='#FFFF'/>
                            <Card.Image
                                style={UsefulInformationsStyles.cardImage}  
                                source={secondImageSource}
                            />
                            <Text style={UsefulInformationsStyles.text}>
                                {mySecondDetailedText}
                            </Text>
                            <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                        </Card>
                </View>

                <View style={UsefulInformationsStyles.cardContainer}>
                        <Card containerStyle={UsefulInformationsStyles.cardContainerStyle}>
                            <Card.Title style={UsefulInformationsStyles.title}>{myThirdText}</Card.Title>
                            <Card.Divider color='#FFFF'/>
                            <Card.Image
                                style={UsefulInformationsStyles.cardImage}  
                                source={ThirdImageSource}
                            />
                            <Text style={UsefulInformationsStyles.text}>
                               {myThirdDetailedText}
                            </Text>
                            <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                        </Card>
                </View>

                <View style={UsefulInformationsStyles.cardContainer}>
                        <Card containerStyle={UsefulInformationsStyles.cardContainerStyle}>
                            <Card.Title style={UsefulInformationsStyles.title}>{myFourthText}</Card.Title>
                            <Card.Divider color='#FFFF'/>
                            <Card.Image
                                style={UsefulInformationsStyles.cardImage}  
                                source={FourthImageSource}
                            />
                            <Text style={UsefulInformationsStyles.text}>
                               {myFourthDetailedText}
                            </Text>
                            <ButtonComponent minHeight='40px' minWidth='168px' backgroundColor='#e989ff' borderColor='#ffbbca' title="Saiba mais" />
                        </Card>
                </View>

                <View style={UsefulInformationsStyles.buttonContainer}>
                    <ButtonComponent 
                    minHeight='40px' 
                    minWidth='168px' 
                    backgroundColor='#e989ff' 
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
                    }}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



