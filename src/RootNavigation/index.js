import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faPersonCircleXmark} from '@fortawesome/free-solid-svg-icons/faPersonCircleXmark';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faVideo} from '@fortawesome/free-solid-svg-icons/faVideo';
import * as Screens from '../Screens';
import {Routes} from './Routes';
import {Image} from 'react-native';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Search = createStackNavigator();
const Library = createStackNavigator();
const Profile = createStackNavigator();
function BottomTabStack() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: 'white',
          // borderRadius: 15,
          height: 80,
          // borderColor: "grey",
          // borderWidth: 1,
          justifyContent: 'center',
          borderTopColor: 'black',
          padding: 10,
        },
      }}>
      <Tabs.Screen
        name={Routes.Home}
        component={HomeStackScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faHome} size={30} />;
          },
        }}
      />
      <Tabs.Screen
        name={Routes.Search}
        component={SearchScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faSearch} size={30} />;
          },
        }}
      />
      <Tabs.Screen
        name={Routes.Library}
        component={LibraryScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faVideo} size={30} />;
          },
        }}
      />
      <Tabs.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => {
            return <FontAwesomeIcon icon={faPersonCircleXmark} size={30} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Routes.Login} component={Screens.Login} />
      {/* <Stack.Screen name={Routes.Home} component={Screens.Intro} /> */}
    </Stack.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={'AuthStack'} component={AuthStack} />
      <Stack.Screen name={'TabStack'} component={BottomTabStack} />
    </Stack.Navigator>
  );
};
function RootNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={'Main'} component={MainStack} />
    </Stack.Navigator>
  );
}

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Routes.Home} component={Screens.Intro} />
    </HomeStack.Navigator>
  );
};

const SearchScreen = ({navigation}) => {
  return (
    <Search.Navigator screenOptions={{headerShown: false}}>
      <Search.Screen name={Routes.Search} component={Screens.SearchScreen} />
    </Search.Navigator>
  );
};

const LibraryScreen = ({navigation}) => {
  return (
    <Library.Navigator screenOptions={{headerShown: false}}>
      <Library.Screen
        name={Routes.Library}
        component={Screens.VideoLibraryFeed}
      />
    </Library.Navigator>
  );
};
const ProfileScreen = ({navigation}) => {
  return (
    <Profile.Navigator screenOptions={{headerShown: false}}>
      <Profile.Screen name={Routes.Profile} component={Screens.Profile} />
    </Profile.Navigator>
  );
};

export default RootNavigation;
{
  /* <NavigationContainer>
<RootNavigation/>
</NavigationContainer> */
}
