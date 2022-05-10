import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { COLORS, FONTS, SIZES } from "../../constants/theme";

function ListItem({ title, subTitle, image, IconComponent,onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={COLORS.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title}>{title}</AppText>
             {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: COLORS.white,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    
  },
  subTitle: {
    color: COLORS.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
