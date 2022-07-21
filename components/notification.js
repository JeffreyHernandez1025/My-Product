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
  ScrollView,
} from 'react-native'
import React, { useState, useCallback, Children } from 'react'

const Logo = require('../assets/TCBlogo.png')

export default function Notification() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#48C7C6',
        position: 'absolute',
        zIndex: 2,
        top: 20,
        width: 393,
        height: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 20,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#A3E3E2',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image style={{ width: 42, height: 37 }} source={Logo} />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>
          The Service Cube
        </Text>
        <Text>
          You have completed your Hour Block! You have recieved 60 Cube Points!
        </Text>
      </View>
    </View>
  )
}
