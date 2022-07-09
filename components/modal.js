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

export default function Popup(props) {
  const [modalVisible, setModalVisible] = useState(!props.visible)

  return (
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
  )
}
