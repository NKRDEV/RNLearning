import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import CommonButton from "../../components/commonButton";

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`changePasswordScreen:${key}`);
  }

  const [currentPassword, setCurrentPassword] = useState();
  const [showCurrentPassWord, setShowCurrentPassWord] = useState(false);

  const [newPassword, setNewPassword] = useState();
  const [showNewPassWord, setShowNewPassWord] = useState(false);

  const [repeatNewPassword, setRepeatNewPassword] = useState();
  const [showRepeatNewPassWord, setShowRepeatNewPassWord] = useState(false);

  const passwordTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: Default.fixPadding * 2.5,
          ...styles.textInputViewStyle,
        }}
      >
        <MaterialCommunityIcons
          name="lock-outline"
          size={18}
          color={Colors.grey}
        />
        <TextInput
          value={currentPassword}
          secureTextEntry={showCurrentPassWord ? false : true}
          onChangeText={setCurrentPassword}
          placeholder={tr("currentPassword")}
          placeholderTextColor={Colors.grey}
          numberOfLines={1}
          selectionColor={Colors.primary}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
        <Feather
          name={showCurrentPassWord ? "eye" : "eye-off"}
          size={17}
          color={Colors.grey}
          onPress={() => setShowCurrentPassWord((prev) => !prev)}
        />
      </View>
    );
  };

  const newPasswordTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.textInputViewStyle,
        }}
      >
        <MaterialCommunityIcons
          name="lock-outline"
          size={18}
          color={Colors.grey}
        />
        <TextInput
          value={newPassword}
          secureTextEntry={showNewPassWord ? false : true}
          onChangeText={setNewPassword}
          placeholder={tr("newPassword")}
          placeholderTextColor={Colors.grey}
          numberOfLines={1}
          selectionColor={Colors.primary}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
        <Feather
          name={showNewPassWord ? "eye" : "eye-off"}
          size={17}
          color={Colors.grey}
          onPress={() => setShowNewPassWord((prev) => !prev)}
        />
      </View>
    );
  };

  const repeatNewPasswordTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.textInputViewStyle,
        }}
      >
        <MaterialCommunityIcons
          name="lock-outline"
          size={18}
          color={Colors.grey}
        />
        <TextInput
          value={repeatNewPassword}
          secureTextEntry={showRepeatNewPassWord ? false : true}
          onChangeText={setRepeatNewPassword}
          placeholder={tr("repeatPassword")}
          numberOfLines={1}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
        <Feather
          name={showRepeatNewPassWord ? "eye" : "eye-off"}
          size={17}
          color={Colors.grey}
          onPress={() => setShowRepeatNewPassWord((prev) => !prev)}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("changePassword")} navigation={navigation} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {passwordTextInput()}
          {newPasswordTextInput()}
          {repeatNewPasswordTextInput()}
        </ScrollView>
        <CommonButton
          title={tr("saveChange")}
          onPress={() => navigation.pop()}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  textInputViewStyle: {
    alignItems: "center",
    paddingHorizontal: Default.fixPadding,
    paddingVertical:
      Platform.OS === "ios"
        ? Default.fixPadding * 1.5
        : Default.fixPadding * 1.3,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  textInputStyle: {
    flex: 1,
    ...Fonts.Regular14primary,
    marginHorizontal: Default.fixPadding * 0.8,
    padding: 0,
  },
});
