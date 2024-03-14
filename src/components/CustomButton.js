import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({btnname, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.btnstyle} onPress={onPress}>
      <Text style={styles.btnname}>{btnname}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  btnstyle: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 150,
    marginTop: 50,
    alignItems:"center"
  },
  btnname:{
    color:"#fff",
    fontWeight:"bold"
  }
});
 