import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Fonts, Colors, Default } from "../constants/styles";

const CommonButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touchableStyle}
      onPress={() => props.onPress()}
    >
      <Text numberOfLines={1} style={{ ...Fonts.Bold18white }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  touchableStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 1.5,
    marginVertical: Default.fixPadding * 2,
    marginHorizontal: Default.fixPadding * 7,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    ...Default.shadowPrimary,
  },
});
