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
import MapView from 'react-native-maps'
import React, { useState, useEffect } from 'react'

import styles from './styles/styles'

export default function Hours() {
 return(
<View>
 <MapView style={styles.map} />
</View>
)}