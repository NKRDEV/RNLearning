import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useNavigation } from "expo-router";
import Header from "../../components/header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const LanguageScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`languageScreen:${key}`);
  }

  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.resolvedLanguage
  );

  async function onChangeLang(lang) {
    i18n.changeLanguage(lang);
    try {
      await AsyncStorage.setItem("@APP:languageCode", lang);
    } catch (error) {
      alert("something went wrong");
    }
  }

  const languageList = [
    {
      key: "1",
      name: "English",
      lang: "en",
    },
    {
      key: "2",
      name: "हिन्दी",
      lang: "hi",
    },
    {
      key: "3",
      name: "bahasa Indonesia",
      lang: "id",
    },
    {
      key: "4",
      name: "中国人",
      lang: "ch",
    },
    {
      key: "5",
      name: "عربي",
      lang: "ar",
    },
    {
      key: "6",
      name: "Français",
      lang: "fr",
    },
    {
      key: "7",
      name: "Português",
      lang: "po",
    },
    {
      key: "8",
      name: "Italiano",
      lang: "it",
    },
    {
      key: "9",
      name: "Türkçe",
      lang: "tu",
    },
  ];

  const renderItem = ({ item }) => {
    const selected = selectedLanguage === item.lang;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setSelectedLanguage(item.lang);
          onChangeLang(item.lang);
          navigation.pop();
        }}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.mainTouchableOpacityStyle,
        }}
      >
        {selected ? (
          <MaskedView
            style={{ height: 18 }}
            maskElement={
              <MaterialCommunityIcons name="record-circle" size={18} />
            }
          >
            <LinearGradient
              colors={[Colors.yellow, Colors.darkPrimary]}
              style={{ flex: 1 }}
            >
              <MaterialCommunityIcons
                name="record-circle"
                size={18}
                color={Colors.transparent}
              />
            </LinearGradient>
          </MaskedView>
        ) : (
          <MaterialCommunityIcons
            name="circle-outline"
            size={18}
            color={Colors.extraLightGrey}
          />
        )}
        <Text
          numberOfLines={1}
          style={{ textAlign: isRtl ? "right" : "left", ...styles.textStyle }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const languageFlatLit = () => {
    return (
      <FlatList
        data={languageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: Default.fixPadding * 2 }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("languages")} navigation={navigation} />
        {languageFlatLit()}
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  mainTouchableOpacityStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 1.9,
    paddingVertical: Default.fixPadding * 1.3,
    marginBottom: Default.fixPadding * 2,
    marginHorizontal: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  textStyle: {
    flex: 1,
    marginHorizontal: Default.fixPadding,
    ...Fonts.Regular16black,
  },
});
