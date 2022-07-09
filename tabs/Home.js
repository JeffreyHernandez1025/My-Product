import {
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
} from 'react-native'
import React, { useState } from 'react'
import styles from './styles/styles'
import filter from 'lodash.filter'
import Popup from '../components/modal'

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  const [query, setQuery] = useState('')

  const [opportunities, setOpportunities] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      opportunity: 'Beach Cleaning',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      opportunity: 'Pick Up Trash',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      opportunity: 'Business Helping',
    },
    {
      id: '4',
      opportunity: 'Park Cleaning',
    },
    {
      id: '5',
      opportunity: 'Street Cleaning',
    },
  ])

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
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20,
            }}
          >
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              clearButtonMode='always'
              value={query}
              onChangeText={(queryText) => handleSearch(queryText)}
              placeholder='Search'
              style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
            />
          </View>
        }
        // ... rest of the props remain same
      />
      <Text style={styles.title}> Locations near you </Text>
      <FlatList
        data={opportunities}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.item} on>
              {item.opportunity}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')(!modalVisible)
        }}
      >
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text>Hide Modal</Text>
        </Pressable>
        <Text> Hello World </Text>
      </Modal>
    </View>
  )
}
