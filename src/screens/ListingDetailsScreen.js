import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/Text'

import { ListItem } from '../components/lists'
import { COLORS } from '../../constants/theme'

export default ListingDetailsScreen = ({ route }) => {
  const listing = route.params

  return (
    <View>
      <Image
        style={styles.image}
        source={listing.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../../assets/images/mosh.jpg')}
            title="Chadwin Allotey"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
})
