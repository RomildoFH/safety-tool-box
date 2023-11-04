import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfirmButton from '../../components/ConfirmButton';

const logo = require('../../images/site-logo.png');
const background = require('../../images/dark-green-2790337_1280.png');

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('usuario@example.com');
  const [password, setPassword] = useState('senha123');
  const [invalidAccess, setInvalidAccess] = useState(false);

  async function validarCredenciais() {
    if (email === 'usuario@example.com' && password === 'senha123') {
      navigation.navigate('Home');
    } else {
      console.log('Credenciais inválidas');
      setInvalidAccess(true);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Image source={background} style={styles.backgroundImage} />
      <View style={styles.loginContainer}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logoForm} />
        </View>
        <TextInput
          name='email'
          placeholder='Email'
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.loginInput}
        />
        <TextInput
          name='password'
          placeholder='Senha'
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.loginInput}
        />
        {invalidAccess && <Text style={styles.smallTextAlert}>Email ou senha incorretos</Text>}
        <ConfirmButton label="Entrar" onPress={validarCredenciais} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#279933',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '95%',
    maxWidth: 600,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    backgroundColor: '#58C047',
    height: 150,
    width: 240,
    paddingVertical: 35,
    paddingHorizontal: 35,
    borderRadius: 20,
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
