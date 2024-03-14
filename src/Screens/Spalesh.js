import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Spalesh = () => {
  useEffect(() => {}, []);
  return <View style={styles.container}>
    <Text>
        Dice App
    </Text>
  </View>;
};

export default Spalesh;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
