import { StyleSheet, View, ScrollView, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import CommonButton from "../../components/commonButton";

const HelpAndSupportScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`helpAndSupportScreen:${key}`);
  }

  const [name, setName] = useState();
  const [emailId, setEmailId] = useState();
  const [message, setMessage] = useState();

  const imageContainer = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: Default.fixPadding * 4,
        }}
      >
        <Image
          source={require("../../assets/images/help.png")}
          style={{ width: 233, height: 233 }}
        />
      </View>
    );
  };

  const nameTextInput = () => {
    return (
      <View
        style={{
          ...styles.textInputStyle,
          marginTop: Default.fixPadding * 0.5,
        }}
      >
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={tr("enterName")}
          numberOfLines={1}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Regular14black,
            padding: 0,
          }}
        />
      </View>
    );
  };

  const emailIdTextInput = () => {
    return (
      <View
        style={{
          ...styles.textInputStyle,
        }}
      >
        <TextInput
          value={emailId}
          onChangeText={setEmailId}
          placeholder={tr("enterEmailId")}
          keyboardType="email-address"
          placeholderTextColor={Colors.grey}
          numberOfLines={1}
          selectionColor={Colors.primary}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Regular14black,
            padding: 0,
          }}
        />
      </View>
    );
  };

  const messageTextInput = () => {
    return (
      <View
        style={{
          ...styles.textInputStyle,
        }}
      >
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder={tr("writeMessageHere")}
          multiline={true}
          numberOfLines={6}
          textAlignVertical="top"
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          style={{
            height: 193,
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Regular14black,
            padding: 0,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("helpSupport")} navigation={navigation} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {imageContainer()}
          {nameTextInput()}
          {emailIdTextInput()}
          {messageTextInput()}
        </ScrollView>
        <CommonButton title={tr("send")} onPress={() => navigation.pop()} />
      </View>
    </View>
  );
};

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: Default.fixPadding * 1.3,
    paddingVertical: Default.fixPadding * 1.5,
    borderRadius: 8,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
