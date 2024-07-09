import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfirmButton from './ConfirmButton';

function ToolDescription({name, description, route, closeFunction}) {
  const navigation = useNavigation();

  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle}>{name.toUpperCase().replaceAll('-', ' ')}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <ConfirmButton label="abrir" onPress={() => navigation.navigate(route)} />
      <Pressable style={styles.closeBtn} onPress={() => closeFunction()}>        
        <Text style={styles.closeButtonText}>x</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  descriptionContainer: {
    display: 'relative',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    // bottom: 0,
    width: '100%',
    height: '250px',
    padding: 10,
    
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
    // marginLeft: 10,
    // marginRight: 10,
    // width: '95%',
  },
  closeBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    padding: 1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 4,
  },
  closeButtonText: {
    textAlign: 'center',
    width: 20,
    height: 20,
    color: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderRadius: 10
  },
});

export default ToolDescription;
