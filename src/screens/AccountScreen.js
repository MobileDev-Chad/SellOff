import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from '../components/Icon';
import { ListItem, ListItemSeperator } from '../components/lists';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';

import { COLORS } from '../../constants/theme';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: COLORS.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: COLORS.secondary,
    },
  },
];

export default AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();


  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../../assets/images/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(routes.MESSAGES)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={()=> logOut()}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.light,
  },
  container: {
    marginVertical: 20,
  },
});
