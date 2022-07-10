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
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'
import styles from './styles/styles'
import filter from 'lodash.filter'

// const supportedURL = 'https://saveourshores.org/beachcleanups/'

// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.canOpenURL(url)

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url)
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`)
//     }
//   }, [url])



//   return (
//     <Button style={styles.website}
//       title='https://saveourshores.org/beachcleanups/'
//       onPress={handlePress}
//     />
//   )
// }

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
    {
      id: '6',
      opportunity: 'Elementary School',
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
          <Text style={styles.off}> Back </Text>
        </Pressable>
        <Text style={styles.name}> {opportunities[0].opportunity} </Text>
        <View style={styles.desContainer}>
          <Text style={styles.name2}> Description: </Text>
          <Text style={styles.des}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{' '}
          </Text>
        </View>
        <Text style={styles.name3}> Sign Up! </Text>
        <View style={styles.websiteContainer}>
          <Text style={styles.name4}> website </Text>
          {/* <OpenURLButton url={supportedURL} /> */}
          <Text
            style={styles.website}
            onPress={() =>
              Linking.openURL('https://saveourshores.org/beachcleanups/')
            }
          >
            https://saveourshores.org/beachcleanups/
          </Text>
          <Text style={styles.comment}> *Preferred Way to Sign Up* </Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.name5}> location </Text>
            <Text stye={styles.location}> 123 Los Angeles Street,90014 </Text>
        </View>
      </Modal>
    </View>
  )
}
