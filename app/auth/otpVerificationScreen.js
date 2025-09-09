import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "../../components/commonButton";
import { OtpInput } from "react-native-otp-entry";

const { width } = Dimensions.get("window");

const OtpVerificationScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`otpVerificationScreen:${key}`);
  }

  const [loadingModal, setLoadingModal] = useState(false);

  const closeLoadingModal = () => {
    setLoadingModal(true);
    setTimeout(() => {
      setLoadingModal(false);
      navigation.push("(tabs)");
    }, 1500);
  };

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

  const verificationHeaderTitle = () => {
    return (
      <View style={styles.containerStyle}>
        <Text style={{ ...Fonts.Bold24black }}>{tr("verification")}</Text>
        <Text style={styles.pleaseEnterTextStyle}>
          {`${tr("pleaseEnter")} +9188******10`}
        </Text>
      </View>
    );
  };

  const otpContainer = () => {
    return (
      <View
        style={{
          marginTop: Default.fixPadding * 3.6,
          marginBottom: Default.fixPadding * 1.6,
          marginHorizontal: Default.fixPadding * 8,
        }}
      >
        <OtpInput
          numberOfDigits={4}
          onTextChange={(otp) => {
            if (otp.length === 4) {
              closeLoadingModal();
            }
          }}
          theme={{
            pinCodeContainerStyle: {
              borderWidth: 0,
              width: 40,
              height: 40,
              borderRadius: 8,
              backgroundColor: Colors.white,
              ...Default.shadow,
            },
            pinCodeTextStyle: { ...Fonts.Bold20primary },
            focusedPinCodeContainerStyle: {
              borderWidth: 0,
              borderRadius: 8,
            },
            focusStickStyle: { backgroundColor: Colors.primary },
          }}
        />
      </View>
    );
  };

  const confirmAndResendButton = () => {
    return (
      <View>
        <CommonButton title={tr("confirm")} onPress={closeLoadingModal} />
        <TouchableOpacity
          style={{ alignSelf: "center", marginBottom: Default.fixPadding * 2 }}
        >
          <Text style={{ ...Fonts.Bold16primary }}>{tr("resend")}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const pleaseWaitLoadingModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={loadingModal}>
        <View style={styles.modalViewStyle}>
          <View style={styles.modalSubViewStyle}>
            <ActivityIndicator size={"large"} color={Colors.primary} />
            <Text
              style={{
                ...Fonts.Bold18black,
                marginTop: Default.fixPadding,
              }}
            >
              {tr("pleaseWait")}
            </Text>
          </View>
        </View>
      </Modal>
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
          {verificationHeaderTitle()}
          {otpContainer()}
          {confirmAndResendButton()}
        </ScrollView>
      </View>
      {pleaseWaitLoadingModal()}
    </View>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  backTouchableStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 1.6,
    marginBottom: Default.fixPadding * 0.9,
  },
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Default.fixPadding * 2.4,
    marginHorizontal: Default.fixPadding * 2,
  },
  pleaseEnterTextStyle: {
    ...Fonts.Regular14lightGrey,
    textAlign: "center",
    marginTop: Default.fixPadding * 3.6,
    marginHorizontal: Default.fixPadding * 2,
  },
  modalViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.transparentBlack,
  },
  modalSubViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.9,
    height: 166,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
