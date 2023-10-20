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
        height: props.height,
        minWidth: props.minWidth,
        maxWidth: props.maxWidth,
        minHeight: props.minHeightContainer,
        maxHeight: props.maxHeight,
        borderRadius: props.borderRadius,
        borderBottomStartRadius: props.borderBottomStartRadius,
        borderBottomEndRadius: props.borderBottomEndRadius,
        alignSelf: 'center',
        elevation:4,
      }}
      buttonStyle={{
        elevation:1,
        shadowOffset: {
          width: 0,
          height: 1, // Reduza a altura da sombra
        },
        borderRadius:10,
        minHeight:props.minHeightButton
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={props.leftIconName}
          type='font-awesome'
          size={15}
          color='white'
          style={{ marginHorizontal: 10 }}
          onPress={props.onLeftIconPress}
        />
        <Text style={buttonStyle.buttonText}>{props.title}</Text>
        <Icon
          name={props.rightIconName}
          type='font-awesome'
          size={15}
          color='white'
          style={{ marginHorizontal: 10 }}
          onPress={props.onRightIconPress}
        />
      </View>
    </Button>
  );
};

export default ButtonComponent;
