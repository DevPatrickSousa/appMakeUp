import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { laws } from './styles';
import Line from '../../components/Line';

export default function Laws() {

    //import fonts

    const [loaded] = useFonts({
        nunito: require('../../fonts/Nunito-VariableFont_wght.ttf'),
        nunitoItalic: require('../../fonts/Nunito-Italic-VariableFont_wght.ttf'),
        montserrat: require('../../fonts/Montserrat-VariableFont_wght.ttf'),
        OpenSans: require('../../fonts/OpenSans-VariableFont_wdth,wght.ttf')
    });

    return (
        <SafeAreaView style={laws.container}>
            <StatusBar style="auto" />

            <ScrollView contentContainerStyle={laws.scrollViewContainer}>
                <View style={laws.cardContainer}>
                    <ScrollView contentContainerStyle={laws.card}>
                        <Text style={laws.title}>
                            Lei Maria da Penha <Text style={laws.importantText}>(11.340/2006)</Text>
                        </Text>
                        <Line/>
                        <Text style={laws.cardContent} h2>
                            Cria mecanismos para coibir a violência doméstica e familiar contra a mulher e estabelece medidas de assistência e proteção.
                        </Text>
                    </ScrollView>
                </View>

                <View style={laws.cardContainer}>
                    <ScrollView contentContainerStyle={laws.card}>
                    <Text style={laws.title}>
                        Lei Carolina Dieckmann <Text style={laws.importantText}>(12.737/2012)</Text>
                        </Text>
                        <Line/>
                        <Text style={laws.cardContent} h2>
                            Tornou crime a invasão de aparelhos eletrônicos para obtenção de dados particulares.
                        </Text>
                    </ScrollView>
                </View>

                <View style={laws.cardContainer}>
                    <ScrollView contentContainerStyle={laws.card}>
                        <Text style={laws.title}>
                            Lei Joana Maranhão <Text style={laws.importantText}>(12.650/2015)</Text>
                        </Text>
                        <Line/>
                        <Text style={laws.cardContent} h2>
                        Alterou os prazos quanto a prescrição de crimes de abusos sexuais de crianças e adolescentes.
                        A prescrição passou a valer após a vítima completar 18 anos, e o prazo para denúncia aumentou para 20 anos.
                        </Text>
                    </ScrollView>
                </View>

                <View style={laws.cardContainer}>
                    <ScrollView contentContainerStyle={laws.card}>
                        <Text style={laws.title}>
                            Lei Joana Maranhão <Text style={laws.importantText}>(12.650/2015)</Text>
                        </Text>
                        <Line/>
                        <Text style={laws.cardContent} h2>
                        Alterou os prazos quanto a prescrição de crimes de abusos sexuais de crianças e adolescentes.
                        A prescrição passou a valer após a vítima completar 18 anos, e o prazo para denúncia aumentou para 20 anos.
                        </Text>
                    </ScrollView>
                </View>

                <View style={laws.cardContainer}>
                    <ScrollView contentContainerStyle={laws.card}>
                        <Text style={laws.title}>
                            Lei Joana Maranhão <Text style={laws.importantText}>(12.650/2015)</Text>
                        </Text>
                        <Line/>
                        <Text style={laws.cardContent} h2>
                        Alterou os prazos quanto a prescrição de crimes de abusos sexuais de crianças e adolescentes.
                        A prescrição passou a valer após a vítima completar 18 anos, e o prazo para denúncia aumentou para 20 anos.
                        </Text>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
