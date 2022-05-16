import { FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import Card from '../components/Card'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import Screen from '../components/Screen'

import { COLORS } from '../../constants/theme'

export default ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    const response = await listingsApi.getListings()
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
