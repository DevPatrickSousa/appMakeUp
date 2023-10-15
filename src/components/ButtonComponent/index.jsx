import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'; 
import { Button } from "@rneui/themed";
import buttonStyle from './styles';

const ButtonComponent = (props) => {
    return (
            <Button 
                onPress={props.onPress}
                containerStyle={{
                    minWidth:props.minWidthContainer,
                    maxWidth:'100%',
                    color: 'white',
                    borderRadius:10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 3,
                    elevation: 1,
                    blurRadius: 4,
                    alignSelf:'center'
                  }}
                buttonStyle={{
                    backgroundColor: props.backgroundColor,
                    textAlign: 'center',
                    minWidth: props.minWidth,
                    minHeight: props.minHeight,
                    color: 'white',
                    
                }}
            >
                {props.left && (
                    <TouchableOpacity onPress={props.onLeftIconPress}>
                        <Icon name="arrow-left" color="white" size={24} />
                    </TouchableOpacity>
                )}
                
                <View style={buttonStyle.buttonTextContainer}>
                    <Text style={buttonStyle.buttonText}>{props.title}</Text>
                </View>
                    
                {props.right && (
                    <TouchableOpacity onPress={props.onRightIconPress}>
                        <Icon name="arrow-right" color="white" size={24} />
                    </TouchableOpacity>
                )}
            </Button>
    );
};
export default ButtonComponent;