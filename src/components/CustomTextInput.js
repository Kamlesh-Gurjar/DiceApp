import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({
  value,
  placeholder,
  keyboardType,
  onChangeText,
  customstyle,
  secureTextEntry,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      style={[styles.inputview, customstyle]}
      placeholderTextColor={'#000'}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  inputview: {
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 0.3,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 10,
    color: '#000',
    paddingLeft: 15,
  },
});
 