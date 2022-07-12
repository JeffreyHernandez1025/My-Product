import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './tabs/Home'
import Hours from './tabs/Hours'
import Rewards from './tabs/Rewards'


const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
       <Tabs.Screen name='Hours' component={Hours} />
       <Tabs.Screen name='Home' component={Home} />  
        <Tabs.Screen name='Rewards' component={Rewards} />
      </Tabs.Navigator>
    </NavigationContainer>
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
