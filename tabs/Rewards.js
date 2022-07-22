import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  Alert,
  Modal,
  Pressable,
  Linking,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import { useFonts } from 'expo-font'

import styles from './styles/styles'

export default function Rewards() {
 // Tabs
 const [tabs, setTabs] = useState([
  {
   id: '1',
   
  },
 ])
  // Search bar feature
  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase()
    const filteredOpportunities = filter(opportunities, (user) => {
      return contains(user, formattedQuery)
    })
    setOpportunities(filteredOpportunities)
    setQuery(text)
  }

  const contains = ({ opportunity }, query) => {
    const { name } = opportunity

    if (name.includes(query)) {
      return true
    }

    return false
  }
  // Fonts
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <View>
      <Text style={styles.rewardsTitle}> Rewards </Text>
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20,
              flexDirection: 'row',
              width: 340,
              hieght: 40,
              alignSelf: 'center',
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../assets/Search.png')}
            />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              clearButtonMode='always'
              value={query}
              onChangeText={(queryText) => handleSearch(queryText)}
              placeholder='Search'
              inlineImageLeft='../assets/Search.png'
              style={{
                backgroundColor: '#fff',
                marginHorizontal: 0,
                fontSize: 20,
              }}
            />
          </View>
        }
      />
      <View style={styles.pointsContainer}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'PoppinsSemiBold',
            marginTop: 18,
            marginLeft: 16,
          }}
        >
          {' '}
          Current points{' '}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'PoppinsSemiBold',
            fontSize: 25,
            marginLeft: 15,
          }}
        >
          {' '}
          1080{' '}
        </Text>
        <View style={{backgroundColor: 'white', width: 80, height: 27, justifyContent: 'center', marginLeft: 16, borderRadius: 8, marginTop: 5 }}>
          <Text style={{ color: '#429A92', textAlign: 'center', fontFamily: 'PoppinsSemiBold', fontSize: 10 }}>
            {' '}
            View History{' '}
          </Text>
        </View>
      </View>
      <View style={{ position: 'absolute', alignSelf: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: 10,
            paddingTop: 230,
            paddingRight: 230,
            paddingLeft: 109,
          }}
        >
          cube points
        </Text>
        </View>
        <View style={{position: 'absolute'}} >
        <Image style={{width: 100, height: 100, marginLeft: 260, marginTop: 185 }} source={require('../assets/cubePointsLogo.png')} />
     </View>

    </View>
  )
}
