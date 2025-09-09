import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "expo-router";
import MyStatusBar from "../components/myStatusBar";
import { Fonts, Colors } from "../constants/styles";

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.push("onboarding/onboardingScreen");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={styles.containerStyle}>
        <Image
          source={require("../assets/images/appIcon.png")}
          style={styles.appIconStyle}
        />
        <Text style={{ ...Fonts.Regular70primary }}>E-learning</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  appIconStyle: {
    width: 116,
    height: 116,
  },
});
