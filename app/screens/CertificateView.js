import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CertificateView() {
  const navigation = useNavigation();

  return (
    <View style={styles.descriptionContainer}>
      <Text>Aqui estará o certificado</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  descriptionContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '250px',
    padding: '10px',
    
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'justify',
    height: '50px',
    marginBottom: '50px',
    width: '100%',
  },
});

export default CertificateView;
