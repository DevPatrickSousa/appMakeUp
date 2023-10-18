import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'; 
import { Button } from "@rneui/themed";
import buttonStyle from './styles';

const ButtonComponent = (props) => {
    return (
        <Button
              title={props.title}
              color={props.color}
              onPress={props.onPress}
              titleStyle={buttonStyle.buttonText}
              containerStyle={{
                width: props.width,
                minWidth: props.minWidth,
                maxWidth: props.maxWidth,
                minHeight: props.minHeight,
                maxHeight: props.maxHeight,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.6,
                shadowRadius: 3,
                elevation: 3,
                blurRadius: 4,
                borderRadius:props.borderRadius,
                borderBottomStartRadius:props.borderBottomStartRadius,
                borderBottomEndRadius:props.borderBottomEndRadius,
                alignSelf:'center'
              }}

              buttonStyle={{
        
              }}
          
              icon={{
                name: props.iconName,
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
    );
};

export default ButtonComponent;
