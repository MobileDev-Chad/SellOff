import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import ActivityIndicator from '../components/ActivityIndicator'
import Button from '../components/Button'
import Card from '../components/Card'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import Text from '../components/Text'
import useApi from '../hooks/useApi'

import { COLORS } from '../../constants/theme'

export default ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings)

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
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
