import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

const logo = require('../images/site-logo.png');

export default function Page() {

  const [email, setEmail] = useState('usuario@example.com');
  const [password, setPassword] = useState('senha123');

  function validarCredenciais(email, senha) {
    return new Promise((resolve, reject) => {
      // Simular validação de credenciais (substitua esta lógica pela chamada real da API)
      if (email === 'usuario@example.com' && senha === 'senha123') {
        resolve(true); // Credenciais válidas
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    });
  };

  async function handleSubmit() {
  try {
    await validarCredenciais(email, password);
    // Credenciais válidas, redirecione para '/tools'
    // Certifique-se de que '/tools' esteja configurado em seu aplicativo
    Link.open('/tools');
  } catch (error) {
    // Credenciais inválidas, exiba uma mensagem de erro ao usuário
    console.error('Credenciais inválidas', error);
    // Você pode atualizar o estado para mostrar uma mensagem de erro ao usuário
  }
}

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
          placeholder="senha"
          secureTextEntry={true} // Isso oculta o texto inserido
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.loginInput}
        />
        <Pressable
          onPress={handleSubmit}
          style={styles.confirmButton}
        >
          <Text>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginContainer: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #000000',
    borderRadius: '15px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    width: '340px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '15px',
    paddingHorizontal: '50px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#5FBB34',
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
    height: '50px',
    width: '200px',
    borderRadius: '5px',
    margin: '20px',
  },
  confirmButton: {
    backgroundColor: '#042CFE',
    borderRadius: '5px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: '#FFFFFF',
    height: '50px',
    width: '200px',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontSize: '1.2rem',
    textAlign: 'center',
    paddingVertical: '12px',
    paddingHorizontal: '60px',
  },
});