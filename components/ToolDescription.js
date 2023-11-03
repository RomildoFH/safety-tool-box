import { StyleSheet, Text, View } from 'react-native';

function ToolDescription({name, description, route}) {
  return (
    <View style={styles.descriptionContainer}>
      <Text>{name.toUpperCase()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: '#fff',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '200px'
  },
});

export default ToolDescription;
