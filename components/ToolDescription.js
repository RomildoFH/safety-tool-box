import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfirmButton from './ConfirmButton';

function ToolDescription({name, description, route}) {
  const navigation = useNavigation();

  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle}>{name.toUpperCase().replaceAll('-', ' ')}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <ConfirmButton label="abrir" onPress={() => navigation.navigate(route)} />
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: '1.2rem',
    textAlign: 'justify',
    height: '50px',
    marginBottom: '50px',
    width: '100%',
  },
});

export default ToolDescription;
