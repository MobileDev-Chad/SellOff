import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../../assets/images/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../../assets/images/couch.jpg'),
  },
]

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: COLORS.light,
  },
})
