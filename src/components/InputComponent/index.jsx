import React from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { color } from 'react-native-reanimated';


const InputComponent = (props) => {

  return (
    <View>
      <Input 
        inputContainerStyle={{
          minWidth:props.minWidthContainer,
          maxWidth:'100%',
          borderColor: 'white',
          color: 'white',
          borderWidth: 1,
          borderRadius:10,
          width:props.width
        }}
        inputStyle={{
          textAlign: 'center',
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          color: 'white',
        }}
        labelStyle={{
          flex: 1,
          textAlign: 'left',
          color: 'red',
        }}
        placeholderTextColor="#cf70ed"
        label={props.label}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        inputMode={props.inputMode}
      />
      </View>
  );
};

export default InputComponent;






