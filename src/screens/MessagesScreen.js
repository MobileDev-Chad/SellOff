import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import ListItemSeperator from "../components/ListItemSeperator";

const messages = [
  {
    id: 1,
    title: "T1",
    desription: "D1",
    image: require("../../assets/images/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    desription: "D2",
    image: require("../../assets/images/mosh.jpg"),
  },
];

export default function MessagesScreen(props) {
  const { container } = styles;
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desription}
            image={item.image}
            onPress={() => console.log("Message selected",item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
