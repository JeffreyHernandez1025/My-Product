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
import MapView, { Marker } from 'react-native-maps'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'

import styles from './styles/styles'

export default function Hours() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)


  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      console.log(location)
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }
  return (
    <View>
      <Text style={styles.mapHeader}> Location </Text>
      <Pressable onPress={() => setModalVisible(true)}>
        {location === null ? null : (
          <MapView
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            style={styles.map}
            followsUserLocation={true}
            zoomEnabled={true}
          >
            <Marker
              style={styles.marker}
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              image={require('../assets/marker.png')}
            />
          </MapView>
        )}
      </Pressable>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')(!modalVisible)
        }}
      >
        {location === null ? null : (
          <MapView
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            style={styles.map2}
          >
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.back}> X </Text>
            </Pressable>
            <Marker
              style={styles.marker}
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              image={require('../assets/marker.png')}
            />
          </MapView>
        )}
      </Modal>
      <Text style={styles.info}> Volunteering at Beach Cleanups </Text>
      <Text style={styles.timerHeader}> Timer </Text>
    </View>
  )
}
