import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import CommonButton from "../../components/commonButton";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Stars from "react-native-stars";

const RateAndReviewScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`rateAndReviewScreen:${key}`);
  }

  const [review, setReview] = useState();

  const GradientIcon = () => (
    <MaskedView
      style={{ height: 48 }}
      maskElement={<FontAwesome size={48} name={"star"} />}
    >
      <LinearGradient
        colors={[Colors.yellow, Colors.cinnabar]}
        style={{ flex: 1 }}
      >
        <FontAwesome size={48} name={"star"} color={Colors.transparent} />
      </LinearGradient>
    </MaskedView>
  );

  const ratingView = () => {
    return (
      <View style={styles.ratingViewStyle}>
        <View style={styles.circleStyle}>
          <MaterialCommunityIcons
            name="thumb-up"
            size={85}
            color={Colors.primary}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{ ...Fonts.Bold18black, marginBottom: Default.fixPadding }}
          >
            {tr("rateReview")}
          </Text>
          <Text style={styles.giveUsTextSTyle}>{tr("giveUs")}</Text>

          <View style={{ marginVertical: Default.fixPadding * 2 }}>
            <Stars
              default={4}
              count={5}
              half={false}
              spacing={10}
              fullStar={<GradientIcon name={"star"} size={48} />}
              emptyStar={
                <FontAwesome name={"star"} size={48} color={Colors.mercury} />
              }
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{
              marginBottom: Default.fixPadding * 2,
            }}
          >
            <Text style={{ ...Fonts.Bold14lightBlue }}>{tr("notNow")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const reviewTextinput = () => {
    return (
      <View style={styles.reviewTextinputViewStyle}>
        <TextInput
          value={review}
          onChangeText={setReview}
          multiline={true}
          numberOfLines={6}
          textAlignVertical="top"
          placeholder={tr("writeReview")}
          placeholderTextColor={Colors.darkGrey}
          selectionColor={Colors.primary}
          numberOfLines1
          style={{
            padding: 0,
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Regular14black,
          }}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("rateReview")} navigation={navigation} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {ratingView()}
          {reviewTextinput()}
        </ScrollView>
        <CommonButton title={tr("submit")} onPress={() => navigation.pop()} />
      </View>
    </View>
  );
};

export default RateAndReviewScreen;

const styles = StyleSheet.create({
  ratingViewStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 10,
    paddingHorizontal: Default.fixPadding * 2,
    borderRadius: 8,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  circleStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -Default.fixPadding * 7,
    marginBottom: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  giveUsTextSTyle: {
    ...Fonts.Regular14grey,
    marginBottom: Default.fixPadding,
    textAlign: "center",
    marginHorizontal: Default.fixPadding * 2,
  },
  reviewTextinputViewStyle: {
    height: 138,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingHorizontal: Default.fixPadding * 1.2,
    paddingVertical: Default.fixPadding * 1.5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
