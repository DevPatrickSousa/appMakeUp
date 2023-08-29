import React from 'react';
import { View, Text } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'; 
import { Button } from "@rneui/themed";
import buttonStyle from './styles';

const ButtonComponent = (props) => {
    return (
        <View style={buttonStyle.buttonContainer}>
            <Button 
                onPress={props.onPress}
                buttonStyle={{
                    backgroundColor: '#E27396',
                    borderWidth: 0,
                    borderRadius: 12,
                    width: 327,
                    height: 56,
                    shadowOffset : { width: 0, height: 4},
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 1,
                    blurRadius: 4,
                }}
            >
                {props.left &&(<Icon name="arrow-left" color="white" />)}
                <Text style={buttonStyle.buttonText}>{props.title}</Text>
                {props.right &&(<Icon name="arrow-right" color="white" />)}
            </Button>
    </View>
    );
  };
export default ButtonComponent;