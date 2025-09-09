import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";

const TermsAndConditionScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`termsAndConditionScreen:${key}`);
  }

  const conditionOfAttending = () => {
    return (
      <View
        style={{
          marginTop: Default.fixPadding * 2,
          marginHorizontal: Default.fixPadding * 2,
        }}
      >
        <Text
          style={{
            ...Fonts.Medium18black,
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {tr("conditionAttending")}
        </Text>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textStyle,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
          pellentesque justo, quis varius dictumst pellentesque pellentesque.
          Mattis nibh arcu dolor, elit auctor. Viverra et diam feugiat egestas
          in euismod orci, odio. Lacus, ultrices lectus odio sit. Sed dictum et
          sollicitudin tortor. Felis sit lacus, lacus nullam maecenas lorem mi,
          gravida.
        </Text>
      </View>
    );
  };

  const termOfUse = () => {
    return (
      <View
        style={{
          marginHorizontal: Default.fixPadding * 2,
        }}
      >
        <Text
          style={{
            ...Fonts.Medium18black,
            textAlign: isRtl ? "right" : "left",
            marginBottom: Default.fixPadding * 1.2,
          }}
        >
          {tr("termUse")}
        </Text>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Regular14grey,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
          pellentesque justo, quis varius dictumst pellentesque pellentesque.
          Mattis nibh arcu dolor, elit auctor. Viverra et diam feugiat egestas
          in euismod orci, odio. Lacus, ultrices lectus odio sit. Sed dictum et
          sollicitudin tortor. Felis sit lacus, lacus nullam maecenas lorem mi,
          gravida.
        </Text>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.textStyle,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
          pellentesque justo, quis varius dictumst pellentesque pellentesque.
          Mattis nibh arcu dolor, elit auctor. Viverra et diam feugiat egestas
          in euismod orci,
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("termsAndCondition")} navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {conditionOfAttending()}
          {termOfUse()}
        </ScrollView>
      </View>
    </View>
  );
};

export default TermsAndConditionScreen;

const styles = StyleSheet.create({
  textStyle: {
    ...Fonts.Regular14grey,
    marginTop: Default.fixPadding * 1.2,
    marginBottom: Default.fixPadding * 2,
  },
});
