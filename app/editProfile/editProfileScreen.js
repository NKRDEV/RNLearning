import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
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
import {
  AntDesign,
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CommonButton from "../../components/commonButton";
import { BottomSheet } from "react-native-btr";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`editProfileScreen:${key}`);
  }

  const [name, setName] = useState("Samantha smith");
  const [emailAddress, setEmailAddress] = useState("SamanthaSmith@gamil.com");
  const [mobileNumber, setMobileNumber] = useState("+91 1236547890");
  const [dateOfBirth, setDateOfBirth] = useState("21 jan 1998");

  const [openChangePhotoBottomSheet, setOpenChangePhotoBottomSheet] =
    useState(false);

  const userDetail = () => {
    return (
      <View style={styles.userDetailViewStyle}>
        <View>
          <Image
            source={require("../../assets/images/users/profile.png")}
            style={styles.imageStyle}
          />
          <TouchableOpacity
            onPress={() => setOpenChangePhotoBottomSheet(true)}
            style={{ right: isRtl ? null : 0, ...styles.cameraCircleStyle }}
          >
            <Fontisto name="camera" size={14} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...Fonts.Medium18black,
            marginTop: Default.fixPadding * 0.5,
          }}
        >
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

  const nameTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: name ? Colors.primary : Colors.transparent,
          marginTop: Default.fixPadding * 0.5,
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
          numberOfLines={1}
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

  const dateOfBirthTextInput = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          borderColor: dateOfBirth ? Colors.primary : Colors.transparent,
          ...styles.textInputViewStyle,
        }}
      >
        <Feather
          name="calendar"
          size={14}
          color={dateOfBirth ? Colors.primary : Colors.grey}
        />
        <TextInput
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholder={tr("dateBirth")}
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

  const changePhotoBottomSheet = () => {
    return (
      <BottomSheet
        visible={openChangePhotoBottomSheet}
        onBackButtonPress={() => setOpenChangePhotoBottomSheet(false)}
        onBackdropPress={() => setOpenChangePhotoBottomSheet(false)}
      >
        <View style={styles.bottomSheetViewStyle}>
          <Text
            style={{
              textAlign: "center",
              ...Fonts.Bold18black,
            }}
          >
            {tr("changeProfilePhoto")}
          </Text>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginTop: Default.fixPadding * 2.5,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setOpenChangePhotoBottomSheet(false)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.circleViewStyle}>
                <MaterialCommunityIcons
                  name="camera"
                  size={30}
                  color={Colors.extraLightBlue}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular16black,
                  marginTop: Default.fixPadding,
                }}
              >
                {tr("camera")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setOpenChangePhotoBottomSheet(false)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: Default.fixPadding,
              }}
            >
              <View style={styles.circleViewStyle}>
                <Ionicons name="image" size={30} color={Colors.lightGreen} />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular16black,
                  marginTop: Default.fixPadding,
                }}
              >
                {tr("gallery")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setOpenChangePhotoBottomSheet(false)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.circleViewStyle}>
                <MaterialCommunityIcons
                  name="trash-can"
                  size={30}
                  color={Colors.red}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular16black,
                  marginTop: Default.fixPadding,
                }}
              >
                {tr("removeImage")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("editProfile")} navigation={navigation} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {userDetail()}
          {nameTextInput()}
          {emailAddressTextInput()}
          {mobileNumberTextInput()}
          {dateOfBirthTextInput()}
        </ScrollView>

        <CommonButton title={tr("update")} onPress={() => navigation.pop()} />

        {changePhotoBottomSheet()}
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  userDetailViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 4,
    marginBottom: Default.fixPadding * 2,
  },
  imageStyle: {
    width: 119,
    height: 119,
    borderRadius: 59.5,
  },
  cameraCircleStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
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
  bottomSheetViewStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: Default.fixPadding * 2.3,
    paddingTop: Default.fixPadding * 1.3,
    paddingHorizontal: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  circleViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
