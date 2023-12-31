import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CertificateEmissor from './screens/CertificateEmissor';
import LoginPage from './screens/LoginPage';
import CheckLists from './screens/CheckLists';
import IndividualCertificate from './screens/IndividualCertificate';
import CertificateView from './screens/CertificateView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="CheckLists" component={CheckLists} />
         <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CertificateEmissor" component={CertificateEmissor} />
        <Stack.Screen name="IndividualCertificate" component={IndividualCertificate} />
        <Stack.Screen name="CertificateView" component={CertificateView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
