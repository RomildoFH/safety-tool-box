import { Pressable, StyleSheet, Text } from "react-native";

export default function ConfirmButton({label, onPress}) {
  return (
    <Pressable
      style={styles.confirmButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: '#042CFE',
    borderRadius: 5,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    height: 50,
    width: 200,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: '#FFFFFF',    
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
});


  