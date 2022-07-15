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
  TouchableHighlight
} from 'react-native'
import MapView, { Marker, AnimatedRegion } from 'react-native-maps'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import reactNativeStopwatchTimer, { Timer } from 'react-native-stopwatch-timer'

import styles from './styles/styles'

export default function Hours() {
 // Location
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  // New Modal
  const [modalVisible, setModalVisible] = useState(false)
  // Timer
  const [isTimerStart, setIsTimerStart] = useState(false)
  const [timerDuration, setTimerDuration] = useState(90000)
  const [resetTimer, setResetTimer] = useState(false)
 
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
            showsUserLocation={true}
            zoomEnabled={false}
            scrollEnabled={false}
          >
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
            followsUserLocation={true}
            showsUserLocation={true}
          >
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.back}> X </Text>
            </Pressable>
          </MapView>
        )}
      </Modal>
      <Text style={styles.info}> Beach Cleanups </Text>
      <Text style={styles.timerHeader}> Hour block: 30s </Text>
    </View>
  )
}
