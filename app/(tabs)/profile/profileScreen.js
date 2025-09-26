import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
} from "react-native";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../../constants/styles";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`profileScreen:${key}`);
  }

  const [logoutModal, setLogOutModal] = useState(false);

  const header = () => {
    return (
      <View style={styles.headerViewStyle}>
        <Text
          style={{ textAlign: isRtl ? "right" : "left", ...Fonts.Bold22black }}
        >
          {tr("profile")}
        </Text>
      </View>
    );
  };

  const detail = () => {
    return (
      <View style={styles.detailViewStyle}>
        <Image
          source={require("../../../assets/images/users/profile.png")}
          style={styles.imageStyle}
        />
        <Text style={{ ...Fonts.Medium18black, marginTop: Default.fixPadding }}>
          Samantha Smith
        </Text>
        <Text
          style={{
            ...Fonts.Regular14grey,
            marginTop: Default.fixPadding * 0.3,
          }}
        >
          +91 1236547890
        </Text>
      </View>
    );
  };

  const profileList = [
    {
      key: "1",
      title: tr("editProfile"),
      navigateTo: "editProfile/editProfileScreen",
      icon: FontAwesome,
      iconName: "user",
    },
    {
      key: "2",
      title: tr("notification"),
      navigateTo: "notificationSetting/notificationSettingsScreen",
      icon: Octicons,
      iconName: "bell-fill",
    },
    {
      key: "3",
      title: tr("settings"),
      navigateTo: "setting/settingScreen",
      icon: Ionicons,
      iconName: "settings",
    },
    // {
    //   key: "4",
    //   title: tr("downloads"),
    //   navigateTo:"vedio/vedioViewsScreen",
    //   icon: Feather,
    //   iconName: "upload",
    // },
     {
      key: "4",
      title: tr("myvideos"),
      navigateTo:"vedio/vedioViewsScreen",
      icon: Feather,
      iconName: "video",
    },
    {
      key: "5",
      title: tr("languages"),
      navigateTo: "language/languageScreen",
      icon: FontAwesome5,
      iconName: "globe",
    },
    {
      key: "6",
      title: tr("logout"),
      icon: MaterialIcons,
      iconName: "logout",
    },
  ];

  const profileOtherDetail = () => {
    return (
      <View style={styles.whiteBoxStyle}>
        {profileList.map((item, index) => {
          return (
            <View
              key={item.key}
              style={{
                borderTopColor: Colors.gallery,
                borderTopWidth: index === 0 ? 0 : 2,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (item.key === "6") {
                    setLogOutModal(true);
                  } else {
                    navigation.push(item.navigateTo);
                  }
                }}
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  ...styles.itemsTouchableStyle,
                }}
              >
                <item.icon
                  name={item.iconName}
                  size={20}
                  color={item.key === "6" ? Colors.primary : Colors.black}
                />

                <Text
                  numberOfLines={1}
                  style={{
                    ...(item.key === "6"
                      ? Fonts.Regular16primary
                      : Fonts.Regular16black),
                    textAlign: isRtl ? "right" : "left",
                    ...styles.itemTextStyle,
                  }}
                >
                  {item.title}
                </Text>

                <Ionicons
                  name={
                    isRtl ? "chevron-back-outline" : "chevron-forward-outline"
                  }
                  size={20}
                  color={item.key === "6" ? Colors.primary : Colors.black}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const logoutModalContainer = () => {
    return (
      <Modal
        transparent
        animationType="slide"
        visible={logoutModal}
        onRequestClose={() => setLogOutModal(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setLogOutModal(false)}
          style={{ flex: 1 }}
        >
          <View style={styles.modalBackViewStyle}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.modalTouchableStyle}
            >
              <Text style={styles.areYouSureTextStyle}>{tr("areYouSure")}</Text>

              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginHorizontal: Default.fixPadding * 2,
                  marginTop: Default.fixPadding * 2.2,
                }}
              >
                <TouchableOpacity
                  onPress={() => setLogOutModal(false)}
                  style={styles.cancelTouchableStyle}
                >
                  <Text
                    numberOfLines={1}
                    style={{ ...Fonts.Bold18extraLightGrey }}
                  >
                    {tr("cancel")}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setLogOutModal(false);
                    navigation.push("auth/loginScreen");
                  }}
                  style={styles.logoutTouchableStyle}
                >
                  <Text numberOfLines={1} style={{ ...Fonts.Bold18white }}>
                    {tr("logout")}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {detail()}
          {profileOtherDetail()}
        </ScrollView>
        {logoutModalContainer()}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    paddingHorizontal: Default.fixPadding * 2,
    paddingVertical: Default.fixPadding * 1.5,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  detailViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 4,
    marginBottom: Default.fixPadding * 2,
  },
  imageStyle: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },
  whiteBoxStyle: {
    margin: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  itemsTouchableStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Default.fixPadding * 2.5,
    paddingHorizontal: Default.fixPadding * 1.8,
  },
  itemTextStyle: {
    flex: 1,
    marginHorizontal: Default.fixPadding,
  },
  modalTouchableStyle: {
    overflow: "hidden",
    width: width * 0.8,
    paddingVertical: Default.fixPadding * 2,
    borderRadius: 8,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  modalBackViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.transparentBlack,
  },
  areYouSureTextStyle: {
    textAlign: "center",
    ...Fonts.Medium18black,
    marginHorizontal: Default.fixPadding * 2,
  },
  cancelTouchableStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 1.5,
    marginHorizontal: Default.fixPadding,
    borderRadius: 8,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  logoutTouchableStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 1.5,
    marginHorizontal: Default.fixPadding,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    ...Default.shadowPrimary,
  },
});
