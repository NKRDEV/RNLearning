import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import { Feather, Ionicons } from "@expo/vector-icons";

const DownloadScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`downloadScreen:${key}`);
  }

  const downloadList = [
    {
      key: "1",
      class: "Class-1",
      mb: "5.8 mb",
    },
    {
      key: "2",
      class: "Class-2",
      mb: "5.8 mb",
    },
    {
      key: "3",
      class: "Class-3",
      mb: "5.8 mb",
    },
    {
      key: "4",
      class: "Class-4",
      mb: "5.8 mb",
    },
    {
      key: "5",
      class: "Class-5",
      mb: "5.8 mb",
    },
    {
      key: "6",
      class: "Class-6",
      mb: "5.8 mb",
    },
    {
      key: "7",
      class: "Class-7",
      mb: "5.8 mb",
    },
    {
      key: "8",
      class: "Class-8",
      mb: "5.8 mb",
    },
    {
      key: "9",
      class: "Class-9",
      mb: "5.8 mb",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderTopWidth: index === 0 ? null : 2,
          ...styles.renderItemViewStyle,
        }}
      >
        <Ionicons name="play-circle" size={30} color={Colors.primary} />
        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding * 1.5,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
            {item.class}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Regular14grey,
              marginTop: Default.fixPadding * 0.3,
            }}
          >
            {item.mb}
          </Text>
        </View>
        <Feather name="download" size={24} color={Colors.grey} />
      </View>
    );
  };

  const downloadFlatList = () => {
    return (
      <FlatList
        data={downloadList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("download")} navigation={navigation} />
        {downloadFlatList()}
      </View>
    </View>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  renderItemViewStyle: {
    alignItems: "center",
    borderTopColor: Colors.gallery,
    padding: Default.fixPadding * 2,
  },
});
