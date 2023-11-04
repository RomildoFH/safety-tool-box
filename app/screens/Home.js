import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import toolsCardsArray from "../../images/tools-icons/toolsCardsArray";
import CardList from "../../components/CardList";
import ToolDescription from "../../components/ToolDescription";
import { useState } from "react";

const logo = require('../../images/site-logo.png');

export default function Home() {

  const [showDescription, setShowDescription] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [route, setRoute] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Image
        source={require('../../images/dark-green-2790337_1280.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logoHeader} />
      </View>
      <CardList
        itemArrays={toolsCardsArray}
        setName={setName}
        setDescription={setDescription}
        setRoute={setRoute}
        setShowDescription={setShowDescription}
      />
      {
        showDescription ? (
          <ToolDescription name={name} description={description} route={route} />
        ) : null
      }
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 0,
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
    height: 160,
    width: '100%',
  },
  logoHeader: {
    width: '100%',
    maxWidth: 200,
  },
})
