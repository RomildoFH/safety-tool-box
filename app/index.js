import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfirmButton from '../components/ConfirmButton';

const logo = require('../images/site-logo.png');

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('usuario@example.com');
  const [password, setPassword] = useState('senha123');
  const [invalidAccess, setInvalidAccess] = useState(false);

  async function validarCredenciais() {
    if (email === 'usuario@example.com' && password === 'senha123') {
      navigation.navigate('Tools');
    } else {
      console.log('Credenciais inválidas');
      setInvalidAccess(true);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logoForm} />
        </View>
        <TextInput
          name='email'
          placeholder='email'
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.loginInput}
        />
        <TextInput
          name='password'
          placeholder='senha'
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.loginInput}
        />
        {
          invalidAccess ? <Text style={styles.smallTextAlert}>email ou senha incorretos</Text> : null
        }
        <ConfirmButton label="entrar" onPress={validarCredenciais} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/26/22/23/dark-green-2790337_1280.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(255,255,255, 0.25)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: '95%',
    maxWidth: '600px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#58C047',
    height: '150px',
    width: '240px',
    paddingVertical: '35px',
    paddingHorizontal: '35px',
    borderRadius: '20px',
  },
  logoForm: {
    width: '100%',
  },
  loginInput: {
    backgroundColor: '#D9D9D9',
    height: 50,
    width: 200,
    borderRadius: 5,
    margin: 20,
    padding: 10,
  },
  smallTextAlert: {
    color: 'red',
  },
});

export default LoginPage;
