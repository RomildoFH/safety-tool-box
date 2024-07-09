import { View, Image, StyleSheet } from "react-native";
import certificateToolsCard from "../../images/tools-icons/certificates-images/certificateCardsArray";
import CardList from "../../components/CardList";
import ToolDescription from "../../components/ToolDescription";
import { useState } from "react";

const logo = require('../../images/site-logo.png');

export default function CertificateEmissor() {

  const [showDescription, setShowDescription] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [route, setRoute] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.pageContainer}>
      <Image
        source={require('../../images/dark-green-2790337_1280.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logoHeader} />
      </View>
      <CardList
        itemArrays={certificateToolsCard}
        setName={setName}
        setDescription={setDescription}
        setRoute={setRoute}
        setShowDescription={setShowDescription}
      />
      {
        showDescription ? (
          <ToolDescription
            name={name}
            description={description}
            route={route}
            closeFunction={() => setShowDescription(false)}
          />
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
    // backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/26/22/23/dark-green-2790337_1280.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '250px',
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
})