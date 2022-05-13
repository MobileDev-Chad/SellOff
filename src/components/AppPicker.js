import { Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, {useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

import defaultStyles from "../../constants/styles";

export default function AppPicker({ icon, placeholder, ...props }) {
const [modalVisible, setModalVisible] = useState(false)

  return (
      <>
      <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
          <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.COLORS.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
          name="chevron-down"
          size={20}
          color={defaultStyles.COLORS.medium}
         
        />
    </View>
      </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide"></Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.COLORS.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
      flex: 1,
  }
});
