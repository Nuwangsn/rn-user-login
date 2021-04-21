import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import UserListScreen from '../screens/UserListScreen';

const UserNavigator = createStackNavigator({
  login: LoginScreen,
  user: UserListScreen,
});

export default createAppContainer(UserNavigator);
