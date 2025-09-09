import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useNavigation } from "expo-router";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CommonButton from "../../components/commonButton";
import { Platform } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`signUpScreen:${key}`);
  }

  const [name, setName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const [createPassword, setCreatePassword] = useState();
  const [showPassWord, setShowPassWord] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const backTouchable = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{
          alignSelf: isRtl ? "flex-end" : "flex-start",
          ...styles.backTouchableStyle,
        }}
      >
        <Ionicons
          name={isRtl ? "chevron-forward" : "chevron-back"}
          size={24}
          color={Colors.black}
        />
      </TouchableOpacity>
    );
  };

  const imageAndTitle = () => {
    return (
      <View style={styles.containerStyle}>
        <Image
          source={require("../../assets/images/login.png")}
          style={{ width: 220, height: 220 }}
        />

        <Text
          style={{
            ...Fonts.Bold24black,
            marginBottom: Default.fixPadding * 0.5,
          }}
        >
          {tr("getStarted")}
        </Text>
        <Text style={{ ...Fonts.Regular14grey, textAlign: "center" }}>
          {tr("allFeatures")}
        </Text>
      </View>
    );
  };

  const nameTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: name ? Colors.primary : Colors.transparent,
          marginTop: Default.fixPadding * 2.9,
          ...styles.textInputViewStyle,
        }}
      >
        <AntDesign
          name="user"
          size={16}
          color={name ? Colors.primary : Colors.grey}
        />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={tr("name")}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
      </View>
    );
  };

  const emailAddressTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: emailAddress ? Colors.primary : Colors.transparent,
          ...styles.textInputViewStyle,
        }}
      >
        <Feather
          name="mail"
          size={14}
          color={emailAddress ? Colors.primary : Colors.grey}
        />
        <TextInput
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder={tr("emailAddress")}
          keyboardType="email-address"
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
      </View>
    );
  };

  const mobileNumberTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: mobileNumber ? Colors.primary : Colors.transparent,
          ...styles.textInputViewStyle,
        }}
      >
        <Image
          source={require("../../assets/images/icons/mobileIcon.png")}
          style={{
            width: 14,
            height: 14,
            tintColor: mobileNumber ? Colors.primary : Colors.grey,
          }}
        />
        <TextInput
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="number-pad"
          placeholder={tr("mobileNumber")}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
      </View>
    );
  };

  const passwordTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: createPassword ? Colors.primary : Colors.transparent,
          ...styles.textInputViewStyle,
        }}
      >
        <MaterialCommunityIcons
          name="lock-outline"
          size={18}
          color={createPassword ? Colors.primary : Colors.grey}
        />
        <TextInput
          value={createPassword}
          secureTextEntry={showPassWord ? false : true}
          textContentType="oneTimeCode"
          onChangeText={setCreatePassword}
          placeholder={tr("createPassword")}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
        <Feather
          name={showPassWord ? "eye" : "eye-off"}
          size={17}
          color={Colors.grey}
          onPress={() => setShowPassWord((prev) => !prev)}
        />
      </View>
    );
  };

  const confirmPasswordTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: confirmPassword ? Colors.primary : Colors.transparent,
          ...styles.textInputViewStyle,
        }}
      >
        <MaterialCommunityIcons
          name="lock-outline"
          size={18}
          color={confirmPassword ? Colors.primary : Colors.grey}
        />
        <TextInput
          value={confirmPassword}
          secureTextEntry={showConfirmPassword ? false : true}
          textContentType="oneTimeCode"
          onChangeText={setConfirmPassword}
          placeholder={tr("confirmPassword")}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />
        <Feather
          name={showConfirmPassword ? "eye" : "eye-off"}
          size={17}
          color={Colors.grey}
          onPress={() => setShowConfirmPassword((prev) => !prev)}
        />
      </View>
    );
  };

  const signUpButton = () => {
    return (
      <View
        style={{
          marginTop: Default.fixPadding * 2.6,
          marginBottom: Default.fixPadding * 2,
        }}
      >
        <CommonButton
          title={tr("signUp")}
          onPress={() => navigation.push("auth/otpVerificationScreen")}
        />
      </View>
    );
  };

  const loginNowBottomText = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: Default.fixPadding * 1.8,
        }}
      >
        <Text numberOfLines={1} style={{ ...Fonts.Regular16grey }}>
          {tr("alreadyAccount")}
          <Text
            numberOfLines={1}
            onPress={() => navigation.pop()}
            style={{ ...Fonts.Medium16primary }}
          >{` ${tr("loginNow")}`}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {backTouchable()}

        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {imageAndTitle()}
          {nameTextInput()}
          {emailAddressTextInput()}
          {mobileNumberTextInput()}
          {passwordTextInput()}
          {confirmPasswordTextInput()}

          {signUpButton()}
        </ScrollView>
        {loginNowBottomText()}
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  backTouchableStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 1.6,
    marginBottom: Default.fixPadding * 0.9,
  },
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
  },
  textInputViewStyle: {
    alignItems: "center",
    paddingHorizontal: Default.fixPadding,
    paddingVertical:
      Platform.OS === "ios"
        ? Default.fixPadding * 1.5
        : Default.fixPadding * 1.3,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderWidth: 1,
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
