import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListScreen from '../Screens/ListScreen/ListScreen';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';
import Colors from '../Constants/Colors';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
function ListFun() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        initialParams={{tab: 1}}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
function DetailFun() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        initialParams={{tab: 2}}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const storeData = useSelector(state => state.initalRoute);

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);
  return (
    <NavigationContainer theme={mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          activeTintColor: 'white',
          drawUnderTabBar: false,
          tabBarStyle: {
            backgroundColor: Colors.blueLight,
            borderTopWidth: 0,
            borderColor: 'white',
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            elevation: 0,
            position: 'absolute',
          },
        }}>
        <Tab.Screen
          name="List"
          component={ListFun}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="DetailFun"
          component={DetailFun}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="grid-view" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageIconStyle: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: -45,
    opacity: 0.9,
    // top:2
    // resizeMode:"content"
  },
  imageIconStyle2: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: -22,
    opacity: 0.9,
  },
  underlineStyle: {
    height: 4,
    width: 60,
    backgroundColor: Colors.createTextColor,
    bottom: 20,
    position: 'absolute',
    left: -25,
  },
});
