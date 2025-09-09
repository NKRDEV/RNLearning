import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import { FontAwesome6 } from "@expo/vector-icons";

const SuccessScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  function tr(key) {
    return t(`successScreen:${key}`);
  }

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      navigation.push("(tabs)");
    });
  }, []);

  const circleAndCongratulation = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.mainViewStyle}>
          <View style={styles.primaryCircleStyle}>
            <View style={styles.subCircleStyle}>
              <FontAwesome6 name="check" size={60} color={Colors.primary} />
            </View>
          </View>

          <Text style={{ ...Fonts.Bold28primary }}>{tr("congratulation")}</Text>
          <Text style={styles.successfullyTextStyle}>{tr("successfully")}</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.push("(tabs)")}
          style={{ alignSelf: "center", margin: Default.fixPadding * 2 }}
        >
          <Text style={{ ...Fonts.Bold18primary }}>{tr("backHome")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {circleAndCongratulation()}
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  successfullyTextStyle: {
    ...Fonts.Regular16darkGrey,
    marginTop: Default.fixPadding * 1.2,
    textAlign: "center",
  },
  mainViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
  },
  primaryCircleStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 164,
    height: 164,
    borderRadius: 82,
    borderColor: Colors.primary,
    borderWidth: 2,
    marginBottom: Default.fixPadding * 2.5,
  },
  subCircleStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 2,
    borderColor: Colors.lightPink,
  },
});
