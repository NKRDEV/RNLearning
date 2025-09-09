import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Fonts, Default, Colors } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  return (
    <View
      style={{
        flexDirection: isRtl ? "row-reverse" : "row",
        ...styles.headerViewStyle,
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.pop()}>
        <Ionicons
          name={isRtl ? "chevron-forward" : "chevron-back"}
          size={25}
          color={Colors.black}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={{
          textAlign: isRtl ? "right" : "left",
          ...styles.titleTextStyle,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerViewStyle: {
    zIndex: 1,
    alignItems: "center",
    paddingVertical: Default.fixPadding * 1.5,
    paddingBottom: Default.fixPadding * 1.8,
    paddingHorizontal: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  titleTextStyle: {
    flex: 1,
    overflow: "hidden",
    marginHorizontal: Default.fixPadding * 0.5,
    ...Fonts.Bold22black,
  },
});
