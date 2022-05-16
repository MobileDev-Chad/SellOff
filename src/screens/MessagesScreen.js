import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import {
  ListItem,
  ListItemSeperator,
  ListItemDeleteAction,
} from '../components/lists'
import Screen from '../components/Screen'

const initisalMessages = [
  {
    id: 1,
    title: 'T1',
    desription: 'D1',
    image: require('../../assets/images/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    desription: 'D2',
    image: require('../../assets/images/mosh.jpg'),
  },
]

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(initisalMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    //Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id))
  }
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
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              desription: 'D2',
              image: require('../../assets/images/mosh.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})
