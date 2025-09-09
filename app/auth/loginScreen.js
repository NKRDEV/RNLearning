import React, { useState, useCallback } from "react";
import {
  View,
  BackHandler,
  StyleSheet,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import SnackbarToast from "../../components/snackbarToast";
import { useNavigation } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CommonButton from "../../components/commonButton";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`loginScreen:${key}`);
  }

  const [visibleToast, setVisibleToast] = useState(false);
  const onDismiss = () => setVisibleToast(false);

  const [exitApp, setExitApp] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (Platform.OS === "android") {
          setTimeout(() => {
            setExitApp(0);
          }, 2000);

          if (exitApp === 0) {
            setExitApp(exitApp + 1);
            setVisibleToast(true);
          } else if (exitApp === 1) {
            BackHandler.exitApp();
          }
          return true;
        }
      };
      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        backHandler.remove()
      };
    }, [exitApp])
  );

  const [emailAddress, setEmailAddress] = useState();
  const [passWord, setPassWord] = useState();
  const [showPassWord, setShowPassWord] = useState(false);

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
          {tr("welcomeBack")}
        </Text>
        <Text style={{ ...Fonts.Regular14grey, textAlign: "center" }}>
          {tr("loginLearning")}
        </Text>
      </View>
    );
  };

  const emailAddressTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: emailAddress ? Colors.primary : Colors.transparent,
          marginTop: Default.fixPadding * 2,
          marginBottom: Default.fixPadding * 2,
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
          numberOfLines={1}
          onChangeText={setEmailAddress}
          placeholder={tr("emailAddress")}
          keyboardType="email-address"
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
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
      <View>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            borderColor: passWord ? Colors.primary : Colors.transparent,
            marginBottom: Default.fixPadding,
            ...styles.textInputViewStyle,
          }}
        >
          <MaterialCommunityIcons
            name="lock-outline"
            size={18}
            color={passWord ? Colors.primary : Colors.grey}
          />
          <TextInput
            value={passWord}
            numberOfLines={1}
            secureTextEntry={showPassWord ? false : true}
            onChangeText={setPassWord}
            textContentType="oneTimeCode"
            placeholder={tr("createPassword")}
            placeholderTextColor={Colors.grey}
            selectionColor={Colors.primary}
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

        <Text
          style={{
            ...Fonts.Regular14black,
            textAlign: isRtl ? "left" : "right",
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("forgotPassword")}
        </Text>
      </View>
    );
  };

  const loginButton = () => {
    return (
      <View
        style={{
          marginTop: Default.fixPadding * 2.2,
          marginBottom: Default.fixPadding,
        }}
      >
        <CommonButton
          title={tr("login")}
          onPress={() => navigation.push("auth/signUpScreen")}
        />
      </View>
    );
  };

  const socialButton = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: Default.fixPadding * 2,
        }}
      >
        <Text style={{ ...Fonts.Regular14grey }}>{tr("orConnectUsing")}</Text>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginTop: Default.fixPadding * 3,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: Colors.blue,
              ...styles.socialButtonStyle,
            }}
          >
            <FontAwesome name="facebook" size={26} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.red,
              ...styles.socialButtonStyle,
            }}
          >
            <FontAwesome name="google" size={26} color={Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.sky,
              ...styles.socialButtonStyle,
            }}
          >
            <FontAwesome name="twitter" size={26} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const signUpBottomText = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: Default.fixPadding * 1.8,
        }}
      >
        <Text numberOfLines={1} style={{ ...Fonts.Regular16grey }}>
          {tr("donAccount")}
          <Text
            onPress={() => navigation.push("auth/signUpScreen")}
            style={{ ...Fonts.Medium16primary }}
          >{` ${tr("signUp")}`}</Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {imageAndTitle()}
          {emailAddressTextInput()}
          {passwordTextInput()}
          {loginButton()}
          {socialButton()}
        </ScrollView>
        {signUpBottomText()}
      </View>
      <SnackbarToast
        visible={visibleToast}
        title={tr("tapBack")}
        onDismiss={onDismiss}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 4.7,
    marginBottom: Default.fixPadding * 2,
  },
  textInputViewStyle: {
    paddingHorizontal: Default.fixPadding,
    paddingVertical:
      Platform.OS === "ios"
        ? Default.fixPadding * 1.5
        : Default.fixPadding * 1.3,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginHorizontal: Default.fixPadding * 2,
    borderWidth: 1,
    ...Default.shadow,
  },
  textInputStyle: {
    flex: 1,
    ...Fonts.Regular14primary,
    marginHorizontal: Default.fixPadding * 0.8,
    padding: 0,
  },
  socialButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: Default.fixPadding * 1.5,
  },
});
