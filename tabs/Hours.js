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
  TouchableHighlight,
} from 'react-native'
import MapView, { Marker, AnimatedRegion } from 'react-native-maps'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import * as Location from 'expo-location'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import BottomSheet from '@gorhom/bottom-sheet';

import styles from './styles/styles'

const TAB_BAR_HEIGHT = 49;

export default function Hours() {
  // Location
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  // Timer
  const [pause, setPause] = useState(false)

const bottomSheetRef = useRef (null)

// variables
const snapPoints = useMemo(() => ['25%', '50%'], [])

// callbacks
const handleSheetChanges = useCallback((index) => {
  console.log('handleSheetChanges', index)
}, [])

  const timerFormat = ({ remainingTime }) => {
    var hours = Math.floor(remainingTime / 3600)
    var minutes = Math.floor((remainingTime % 3600) / 60)
    var seconds = remainingTime % 60

    if (hours < 10 && minutes < 10 && seconds < 10) {
      return `${hours}:0${minutes}:0${seconds}`
    }
    if (hours < 10 && minutes >= 10 && seconds < 10) {
      return `${hours}:${minutes}:0${seconds}`
    }
    if (hours < 10 && minutes < 10 && seconds >= 10) {
      return `${hours}:0${minutes}:${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
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
      {location === null ? null : (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          style={styles.map}
          followsUserLocation={true}
          showsUserLocation={true}
        ></MapView>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Text style={styles.info}> Beach Cleanups </Text>
        <Text style={styles.timerHeader}> Hour block: 1 hr </Text>
        <View style={styles.timerContainer}>
          <CountdownCircleTimer
            duration={4300}
            onComplete={() => ({
              shouldRepeat: true,
            })}
            colors={['green', 'red']}
            isPlaying={pause}
          >
            {({ remainingTime, color }) => (
              <Text style={styles.timer}>
                {/* {remainingTime} */}
                {timerFormat({ remainingTime })}
              </Text>
            )}
          </CountdownCircleTimer>
        </View>
        <View style={styles.timerButtons}>
          <Text
            onPress={() => {
              setPause(false)
            }}
            style={styles.pause}
          >
            {' '}
            Pause{' '}
          </Text>
          <Text
            onPress={() => {
              setPause(true)
            }}
            style={styles.start}
          >
            {' '}
            Start{' '}
          </Text>
        </View>
      </BottomSheet>
    </View>
  )
}
