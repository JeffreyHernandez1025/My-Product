import { Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles/styles'

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
  ])



const Item = ({ opportunity }) => (
  <View style={styles.item}>
    <Text style={styles.place}> {opportunity} </Text>
  </View>
)

export default function Home() {

  const renderItem = ({ item }) => (
    <Item title={item.opportunity} />
  )

  return (
    <View>
      <FlatList
        data={opportunities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  )
}
