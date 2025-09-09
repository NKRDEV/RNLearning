import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import GradientStars from "../../components/gradientStars";

const RecommendedScreen = () => {
  const { headerTitle } = useLocalSearchParams();

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`recommendedScreen:${key}`);
  }

  const recommendedList = [
    {
      key: "1",
      image: require("../../assets/images/img1.png"),
      course: "Web Devlopment Course",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "2",
      image: require("../../assets/images/img2.png"),
      course: "The Web devlopment bootcamp",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "3",
      image: require("../../assets/images/img3.png"),
      course: "React- The complete guide",
      rating: 4,
      review: "125",
      price: "$45",
    },
    {
      key: "4",
      image: require("../../assets/images/img6.png"),
      course: "Javascrip zero to hero",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "5",
      image: require("../../assets/images/img7.png"),
      course: "Learn Python programming",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "6",
      image: require("../../assets/images/img8.png"),
      course: "Web devlopment course 2021",
      rating: 3,
      review: "125",
      price: "$45",
    },
    {
      key: "7",
      image: require("../../assets/images/img9.png"),
      course: "The Python mega course",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "8",
      image: require("../../assets/images/img10.png"),
      course: "Html course",
      rating: 4,
      review: "125",
      price: "$45",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.push("detail/detailScreen", { course: item.course })
        }
        activeOpacity={0.8}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: index === 0 ? Default.fixPadding * 2 : 0,
          ...styles.recommendedTouchableStyle,
        }}
      >
        <Image
          source={item.image}
          style={{ width: 105, height: 105, borderRadius: 8 }}
        />
        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
            marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
            {item.course}
          </Text>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginVertical: Default.fixPadding,
            }}
          >
            <GradientStars rating={item.rating} size={16} />
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Regular14grey,
              }}
            >
              {` (${item.review} ${tr("review")})`}
            </Text>
          </View>

          <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const recommendedFlatList = () => {
    return (
      <FlatList
        data={recommendedList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={headerTitle} navigation={navigation} />
        {recommendedFlatList()}
      </View>
    </View>
  );
};

export default RecommendedScreen;

const styles = StyleSheet.create({
  recommendedTouchableStyle: {
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 0.9,
    paddingVertical: Default.fixPadding * 0.9,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
