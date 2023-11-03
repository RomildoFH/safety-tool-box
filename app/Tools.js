import { View, Image, StyleSheet } from "react-native";
import toolsCardsArray from "../images/tools-icons/toolsCardsArray";
import CardList from "../components/CardList";
import ToolDescription from "../components/ToolDescription";
import { useState } from "react";

const logo = require('../images/site-logo.png');

export default function Tools() {

  const [showDescription, setShowDescription] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [route, setRoute] = useState('');

  return (
    <View style={styles.pageContainer}>
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
    </View>
  )
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/26/22/23/dark-green-2790337_1280.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '200px',
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
})