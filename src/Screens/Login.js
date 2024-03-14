import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
 import firestore from '@react-native-firebase/firestore';
// import Loader from '../customComponets/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const Loginuser = () => {
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(res => {
        setVisible(false);
        gotoNext(
          res.docs[0].data().name,
          res.docs[0].data().email,
          res.docs[0].data().userId,
        );
        console.log(JSON.stringify(res.docs[0].data()));
      });
  };
  // firestore()
  // .collection('Users')
  // // Filter results
  // .where('age', '>=', 18)
  // .get()
  // .then(querySnapshot => {
  //   /* ... */
  // });
  const gotoNext = async (name, email, userId) => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', userId);
    navigation.navigate('Main');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logintext}>Login</Text>

      <CustomTextInput
        customstyle={{marginTop: 200}}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email"
      />
      <CustomTextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Password"
      />
      <CustomButton
        btnname={'Login'}
        onPress={() => {
          Loginuser();
        }}
      />
      <Text
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={styles.signuptext}>
        SignUp
      </Text>
      {/* <Loader visisible={visible} /> */}
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 17,
  },

  signuptext: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 100,
    textDecorationLine: 'underline',
  },
  logintext: {
    marginTop: 100,
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
