import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Ionicons } from '@expo/vector-icons'

import Home from './tabs/Home'
import Hours from './tabs/Hours'
import Rewards from './tabs/Rewards'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Search from './tabs/Search'

const Tabs = createBottomTabNavigator()

export default function App() {
  initialRouteName: return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName={'Home'}>
          <Tabs.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  style={styles.bottomTabIcon}
                  source={require('./assets/homeIcon.png')}
                />
              ),
              tabBarLabel: 'Home',
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name='Search'
            component={Search}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  style={styles.bottomTabIcon}
                  source={require('./assets/Search.png')}
                />
              ),
              tabBarLabel: 'Search',
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name='Hour Tracker'
            component={Hours}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  style={styles.bottomTabIcon}
                  source={require('./assets/clockIcon.png')}
                />
              ),
              tabBarLabel: 'Hour Tracker',
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name='Rewards'
            component={Rewards}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  style={styles.bottomTabIcon}
                  source={require('./assets/rewardIcon.png')}
                />
              ),
              tabBarLabel: 'Rewards',
              headerShown: false
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
