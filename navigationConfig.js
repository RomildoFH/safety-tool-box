// navigationConfig.js

import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './LoginPage';
import ToolsPage from './ToolsPage';

const AppNavigator = createStackNavigator(
  {
    Login: LoginPage,
    Tools: ToolsPage,
  },
  {
    initialRouteName: 'Login', // Define a tela inicial
  }
);

export default AppNavigator;
