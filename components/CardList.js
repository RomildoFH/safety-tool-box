import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CardList({
  itemArrays,
  setName,
  setDescription,
  setRoute,
  setShowDescription
}) {

  const onPress = (item) => {
    if (item.status) {
      setName(item.name);
      setDescription(item.description);
      setRoute(item.route);
      setShowDescription(true);
    } else {
      setShowDescription(false);
      alert('Desculpe, ferramenta indispovível no momento');
    }
  };

  const renderItem = (item, index) => (
    <Pressable
      key={index.toString()}
      style={ item.status ? styles.cardContainer : [styles.cardContainer, {opacity: 0.4}] }
      onPress={() => onPress(item)}
    >
      <Image source={item.thumb} style={styles.cardItem} />
    </Pressable>
  );

  return (
    <View style={styles.listContainer}>
      {
        itemArrays.map((item, index) => {
          console.log(`item ${index}`,item)
          return renderItem(item, index)
        })
      }
    </View>
  )
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.7)',    
    height: 150,
    width: 150,
    margin: 7,
    backgroundColor: 'white'
  },
  cardItem: {
    height: 150,
    width: 150,
  },
});
