import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import {
  AntDesign,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const SettingScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`settingScreen:${key}`);
  }

  const settings = () => {
    return (
      <View style={styles.settingViewStyle}>
        <TouchableOpacity
          onPress={() => navigation.push("changePassword/changePasswordScreen")}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.commonTouchableStyle,
          }}
        >
          <Fontisto name="locked" size={20} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              textAlign: isRtl ? "right" : "left",
              ...styles.commonTextStyle,
            }}
          >
            {tr("changePassword")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back-outline" : "chevron-forward-outline"}
            size={20}
            color={Colors.black}
          />
        </TouchableOpacity>

        <View style={styles.borderStyle}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("termsAndCondition/termsAndConditionScreen")
            }
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              ...styles.commonTouchableStyle,
            }}
          >
            <MaterialCommunityIcons
              name="alert-circle"
              size={22}
              color={Colors.black}
            />
            <Text
              numberOfLines={1}
              style={{
                textAlign: isRtl ? "right" : "left",
                ...styles.commonTextStyle,
              }}
            >
              {tr("termsCondition")}
            </Text>

            <Ionicons
              name={isRtl ? "chevron-back-outline" : "chevron-forward-outline"}
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.push("helpAndSupport/helpAndSupportScreen")}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.commonTouchableStyle,
          }}
        >
          <AntDesign name="questioncircle" size={20} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              textAlign: isRtl ? "right" : "left",
              ...styles.commonTextStyle,
            }}
          >
            {tr("help")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back-outline" : "chevron-forward-outline"}
            size={20}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("settings")} navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {settings()}
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  settingViewStyle: {
    margin: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  commonTouchableStyle: {
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 1.8,
    paddingVertical: Default.fixPadding * 2.5,
  },
  commonTextStyle: {
    flex: 1,
    ...Fonts.Regular16black,
    marginHorizontal: Default.fixPadding,
  },
  borderStyle: {
    borderTopWidth: 2,
    borderTopColor: Colors.gallery,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gallery,
  },
});
