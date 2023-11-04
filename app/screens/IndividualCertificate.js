import { useState } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import nrArray from "../../helpers/nrArray";
import equipmentsArray from "../../helpers/equipmentsArray";
import RNPickerSelect from 'react-native-picker-select';

const logo = require('../../images/site-logo.png');

export default function IndividualCertificate() {

  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const nrNames = nrArray.map((e) => {
    return (
      { label: e.name, value: e.name }
    )
  });

  const equipments = equipmentsArray.map((e) => {
    return (
      { label: e, value: e}
    )
  });

  const pickerSelectStyles = {
    inputIOS: {
      backgroundColor: '#D9D9D9',
      height: 50,
      width: 200,
      borderRadius: 5,
      margin: 20,
      padding: 10,
      fontSize: 16,
      color: 'black', // Defina a cor do texto
    },
    inputAndroid: {
      backgroundColor: '#D9D9D9',
      height: 50,
      width: 200,
      borderRadius: 5,
      margin: 20,
      padding: 10,
      fontSize: 16,
      color: 'black', // Defina a cor do texto
    },
    placeholder: { // Adicione um estilo para o placeholder
      color: 'black', // Defina a cor do placeholder
    },
    inputWeb: {
      backgroundColor: '#D9D9D9',
      height: 50,
      width: 200,
      borderRadius: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '15px',
      padding: 10,
      fontSize: 16,
      color: 'black', // Defina a cor do texto
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logoHeader} />
      </View>
      <TextInput
          name='name'
          placeholder='Nome do aluno'
          onChangeText={text => setName(text)}
          value={name}
          style={styles.textInput}
      />
      <TextInput
          name='name'
          placeholder='Nome do treinamento'
          onChangeText={text => setName(text)}
          value={name}
          style={styles.textInput}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={nrNames}
        value={selectedValue}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: 'Selecionar NR', value: null }}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={equipments}
        value={selectedValue}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: 'Selecionar Equipamento', value: null }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/26/22/23/dark-green-2790337_1280.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '250px',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#58C047',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '160px',
    width: '100%',
  },
  logoHeader: {
    width: '100%',
    maxWidth: '200px',
  },
  textInput: {
    backgroundColor: '#D9D9D9',
    height: 50,
    width: 200,
    borderRadius: 5,
    margin: 20,
    padding: 10,
  },
})
