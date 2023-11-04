import { useState } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import nrArray from "../../helpers/nrArray";
import equipmentsArray from "../../helpers/equipmentsArray";
import RNPickerSelect from 'react-native-picker-select';
import ConfirmButton from "../../components/ConfirmButton";

const logo = require('../../images/site-logo.png');

export default function IndividualCertificate() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [norm, setNorm] = useState('');
  const [equipment, setEquipment] = useState('');
  const [begin, setBegin] = useState('');
  const [finish, setFinish] = useState('');
  const [workload, setWorkload] = useState('');
  const [content, setContent] = useState('');

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
      // borderRadius: 5,
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
      <Image
        source={require('../../images/dark-green-2790337_1280.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logoHeader} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
            placeholder='Nome do aluno'
            onChangeText={text => setName(text)}
            value={name}
            style={styles.textInput}
        />
        <TextInput
            placeholder='Nome do instrutor'
            onChangeText={text => setInstructor(text)}
            value={instructor}
            style={styles.textInput}
        />
        <TextInput
            placeholder='Qualificação do instrutor'
            onChangeText={text => setQualifications(text)}
            value={qualifications}
            style={styles.textInput}
        />
        <RNPickerSelect
          onValueChange={(value) => {
            setNorm(value)
            setContent(nrArray.filter((e) => e.name === value)[0].content)
          }}
          items={nrNames}
          value={norm}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: 'Selecionar NR', value: null }}
        />
        <RNPickerSelect
          onValueChange={(value) => setEquipment(value)}
          items={equipments}
          value={equipment}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: 'Selecionar Equipamento', value: null }}
        />
        <View>
          <TextInput
          name='date'
          placeholder='31/12/2023 00:00:00 (início)'
          onChangeText={text => setBegin(text)}
          value={begin}
          style={styles.textInput}
          />
          <TextInput
          name='date'
          placeholder='31/12/2023 00:00:00 (término)'
          onChangeText={text => setFinish(text)}
          value={finish}
          style={styles.textInput}
        />
        </View>
        <TextInput
          placeholder='8 horas'
          onChangeText={text => setWorkload(text)}
          value={workload}
          style={styles.textInput}
        />
        <ConfirmButton label="gerar" onPress={() => navigation.navigate('CertificateView')} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/26/22/23/dark-green-2790337_1280.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
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
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80%',
    width: '80%',
    overflow: 'scroll',
    paddingBottom: '50px',
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
