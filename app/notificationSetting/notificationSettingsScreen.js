import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import ToggleSwitch from "toggle-switch-react-native";

const NotificationSettingsScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`notificationSettingsScreen:${key}`);
  }

  const [notification, setNotification] = useState(true);
  const switchNotification = () =>
    setNotification((notification) => !notification);

  const [recommendedClass, setRecommendedClass] = useState(true);
  const switchRecommendedClass = () =>
    setRecommendedClass((recommendedClass) => !recommendedClass);

  const [promOption, setPromOption] = useState(false);
  const switchPromOption = () => setPromOption((promOption) => !promOption);

  const appNotificationTitleAndSwitch = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: Default.fixPadding * 2,
          ...styles.commonViewStyle,
        }}
      >
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginRight: isRtl ? 0 : Default.fixPadding,
            marginLeft: isRtl ? Default.fixPadding : 0,
            ...styles.textStyle,
          }}
        >
          {tr("appNotification")}
        </Text>
        <ToggleSwitch
          size="medium"
          isOn={notification}
          onColor={Colors.primary}
          offColor={Colors.extraLightGrey}
          onToggle={switchNotification}
        />
      </View>
    );
  };

  const recommendedClassTitleAndSwitch = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.commonViewStyle,
        }}
      >
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginRight: isRtl ? 0 : Default.fixPadding,
            marginLeft: isRtl ? Default.fixPadding : 0,
            ...styles.textStyle,
          }}
        >
          {tr("recommendedClass")}
        </Text>
        <ToggleSwitch
          size="medium"
          isOn={recommendedClass}
          onColor={Colors.primary}
          offColor={Colors.extraLightGrey}
          onToggle={switchRecommendedClass}
        />
      </View>
    );
  };

  const promOptionTitleAndSwitch = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.commonViewStyle,
        }}
      >
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginRight: isRtl ? 0 : Default.fixPadding,
            marginLeft: isRtl ? Default.fixPadding : 0,
            ...styles.textStyle,
          }}
        >
          {tr("promOption")}
        </Text>
        <ToggleSwitch
          size="medium"
          isOn={promOption}
          onColor={Colors.primary}
          offColor={Colors.extraLightGrey}
          onToggle={switchPromOption}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("notificationSettings")} navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          {appNotificationTitleAndSwitch()}
          {recommendedClassTitleAndSwitch()}
          {promOptionTitleAndSwitch()}
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationSettingsScreen;

const styles = StyleSheet.create({
  commonViewStyle: {
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: Default.fixPadding,
    paddingVertical: Default.fixPadding * 1.4,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  textStyle: {
    flex: 1,
    ...Fonts.Regular14grey,
  },
});
