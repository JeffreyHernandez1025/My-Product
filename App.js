import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Ionicons } from '@expo/vector-icons'

import Home from './tabs/Home'
import Hours from './tabs/Hours'
import Rewards from './tabs/Rewards'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Tabs = createBottomTabNavigator()

export default function App() {
  initialRouteName: return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName={'Home'}>
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
              tabBarLabel: 'Home',
            }}
          />
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
              tabBarLabel: 'Home',
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
