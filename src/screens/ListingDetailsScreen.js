import React from 'react';
import { View, StyleSheet, Image, Platform, KeyboardAvoidingView } from 'react-native';
import Text from '../components/Text';
// import { Image } from 'react-native-expo-image-cache';

import { ListItem } from '../components/lists';
import { COLORS } from '../../constants/theme';
import ContactSellerForm from '../components/ContactSellerForm';

export default ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
    behavior='position'
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        // preview={{ uri: listing.images[0].thumbnailUrl }}
        // tint="light"
        source={{uri:listing.images[0].url}}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/images/mosh.jpg")}
            title="Chadwin Allotey"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

