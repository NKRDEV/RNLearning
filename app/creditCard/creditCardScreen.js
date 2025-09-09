import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import * as cardValidator from "card-validator";
import CommonButton from "../../components/commonButton";

const CreditCardScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`creditCardScreen:${key}`);
  }

  const [backspaceRemove, setBackspaceRemove] = useState(false);

  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);

  const [number, setNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(true);

  const [cvvCode, setCvvCode] = useState("");
  const [isValidCvv, setIsValidCvv] = useState(true);

  const [expiryDate, setExpiryDate] = useState("");
  const [isValidExpiry, setIsValidExpiry] = useState(true);

  const handleExpiryDate = (text) => {
    let textTemp = text;
    if (textTemp[0] !== "1" && textTemp[0] !== "0") {
      textTemp = "";
    }
    if (textTemp.length === 2) {
      if (
        parseInt(textTemp.substring(0, 2)) > 12 ||
        parseInt(textTemp.substring(0, 2)) == 0
      ) {
        textTemp = textTemp[0];
      } else if (text.length === 2 && !backspaceRemove) {
        textTemp += "/";
        setBackspaceRemove(true);
      } else if (text.length === 2 && backspaceRemove) {
        textTemp = textTemp[0];
        setBackspaceRemove(false);
      } else {
        textTemp = textTemp[0];
      }
    }
    setExpiryDate(textTemp);
    let expireDateValidation = cardValidator.expirationDate(textTemp);
    setIsValidExpiry(expireDateValidation.isValid);
  };

  const handleCardNumberChange = (value) => {
    let formattedText = value.split(" ").join("");
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join(" ");
    }
    if (formattedText.length === 19) {
      var numberValidation = cardValidator.number(value);
      setIsValidNumber(numberValidation.isValid);
    } else {
      setIsValidNumber(false);
    }
    setNumber(formattedText);
  };

  const allTitleAndTextInput = () => {
    return (
      <View
        style={{
          marginTop: Default.fixPadding * 2,
          marginHorizontal: Default.fixPadding * 2,
        }}
      >
        <Text
          style={{
            ...Fonts.Regular14lightGrey,
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {tr("cardHolderName")}
        </Text>
        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
            let nameValidation = cardValidator.cardholderName(text);
            setIsValidName(nameValidation.isValid);
          }}
          placeholder={tr("enterName")}
          placeholderTextColor={Colors.grey}
          selectionColor={Colors.primary}
          numberOfLines={1}
          style={{
            ...(isValidName ? Fonts.Regular16black : Fonts.Medium16red),
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />

        <Text
          style={{
            ...Fonts.Regular14lightGrey,
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {tr("cardNumber")}
        </Text>

        <TextInput
          maxLength={19}
          value={number}
          onChangeText={(text) => {
            handleCardNumberChange(text);
          }}
          keyboardType={"number-pad"}
          placeholder={tr("enterNumber")}
          placeholderTextColor={Colors.grey}
          numberOfLines={1}
          selectionColor={Colors.primary}
          style={{
            ...(isValidNumber ? Fonts.Regular16black : Fonts.Medium16red),
            textAlign: isRtl ? "right" : "left",
            ...styles.textInputStyle,
          }}
        />

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Regular14lightGrey,
                textAlign: isRtl ? "right" : "left",
              }}
            >
              MM/YY
            </Text>

            <TextInput
              maxLength={5}
              value={expiryDate}
              keyboardType="decimal-pad"
              onChangeText={(text) => {
                handleExpiryDate(text);
              }}
              selectionColor={Colors.primary}
              placeholder={"MM/YY"}
              placeholderTextColor={Colors.grey}
              numberOfLines={1}
              style={{
                ...(isValidExpiry ? Fonts.Regular16black : Fonts.Medium16red),
                textAlign: isRtl ? "right" : "left",
                marginRight: isRtl ? 0 : Default.fixPadding * 1.4,
                marginLeft: isRtl ? Default.fixPadding * 1.4 : 0,
                ...styles.textInputStyle,
              }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Regular14lightGrey,
                textAlign: isRtl ? "right" : "left",
              }}
            >
              {tr("cVVCode")}
            </Text>

            <TextInput
              maxLength={3}
              value={cvvCode}
              secureTextEntry={true}
              keyboardType="number-pad"
              numberOfLines={1}
              onChangeText={(text) => {
                setCvvCode(text);
                if (text.length === 3) {
                  var cvvValidation = cardValidator.cvv(text);
                  setIsValidCvv(cvvValidation.isValid);
                } else {
                  setIsValidCvv(false);
                }
              }}
              selectionColor={Colors.primary}
              placeholder={tr("cVVCode")}
              placeholderTextColor={Colors.grey}
              style={{
                ...(isValidCvv ? Fonts.Regular16black : Fonts.Medium16red),
                textAlign: isRtl ? "right" : "left",
                ...styles.textInputStyle,
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={"Credit card"} navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {allTitleAndTextInput()}
          <CommonButton
            title={tr("paySecurely")}
            onPress={() => navigation.push("success/successScreen")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CreditCardScreen;

const styles = StyleSheet.create({
  textInputStyle: {
    paddingVertical: Default.fixPadding * 0.7,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    marginBottom: Default.fixPadding * 2.5,
  },
});
