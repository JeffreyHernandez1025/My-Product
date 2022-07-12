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

import React, { useState, useEffect } from 'react'
import styles from './styles/styles'

export default function Hours() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])
  return (
    <div style={styles.stopwatch}>
      <div style={styles.numbers}>
       <span>{('0' + Math.floor((time / 600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className='buttons'>
        <button style={styles.start} onClick={() => setRunning(true)}>Start</button>
      </div>
    </div>
  )
}
