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

import styles from './styles/styles'

export default function Rewards() {
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
  return (
    <View>
      <Text style={styles.rewardsTitle}> Rewards </Text>
      <Text style={styles.points}> 1080 </Text>
      <Text style={styles.pointsName}> Cube points </Text>
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}
          >
           <Image style={{width: 20, height: 20,}} source={require('../assets/Search.png')} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              clearButtonMode='always'
              value={query}
              onChangeText={(queryText) => handleSearch(queryText)}
              placeholder='Search'
              inlineImageLeft='../assets/Search.png'
              style={{ backgroundColor: '#fff', paddingHorizontal: 0 }}
            />
          </View>
        }
      />
      <View style={{flexDirection: 'row'}}>
       <View>
       <Text style={styles.Tabs}> Gift Cards </Text>
       </View>
       </View> 
    </View>
  )
}

