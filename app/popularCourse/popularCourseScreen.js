import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import GradientStars from "../../components/gradientStars";

const { width } = Dimensions.get("window");

const PopularCourseScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`popularCourseScreen:${key}`);
  }

  const popularCourseList = [
    {
      key: "1",
      image: require("../../assets/images/img4.png"),
      course: "Google ux design",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "2",
      image: require("../../assets/images/img5.png"),
      course: "Data science",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "3",
      image: require("../../assets/images/category5.png"),
      course: "Music",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "4",
      image: require("../../assets/images/category2.png"),
      course: "Digital marketing",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "5",
      image: require("../../assets/images/category6.png"),
      course: "Photography",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "6",
      image: require("../../assets/images/img11.png"),
      course: "Web design",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "7",
      image: require("../../assets/images/img12.png"),
      course: "Photography",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "8",
      image: require("../../assets/images/img13.png"),
      course: "Web design",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "9",
      image: require("../../assets/images/img5.png"),
      course: "Photography",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "10",
      image: require("../../assets/images/img14.png"),
      course: "Web design",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.push("detail/detailScreen", { course: item.course });
        }}
        style={styles.popularCourseTouchableStyle}
      >
        <Image source={item.image} style={styles.imageStyle} />

        <View
          style={{
            alignItems: isRtl ? "flex-end" : "flex-start",
            paddingTop: Default.fixPadding * 0.9,
            paddingHorizontal: Default.fixPadding * 0.9,
            paddingBottom: Default.fixPadding * 1.1,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
            {item.course}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Regular14grey,
              marginVertical: Default.fixPadding * 0.5,
            }}
          >
            {item.by}
          </Text>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: Default.fixPadding * 0.5,
            }}
          >
            <GradientStars rating={item.rating} size={14} />
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Regular14grey, maxWidth: 50 }}
            >
              {`(${item.review})`}
            </Text>
          </View>
          <Text numberOfLines={1} style={{ ...Fonts.Bold16primary }}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const popularCourseFlatList = () => {
    return (
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={popularCourseList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: Default.fixPadding,
          paddingTop: Default.fixPadding * 2,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("popularCourse")} navigation={navigation} />
        {popularCourseFlatList()}
      </View>
    </View>
  );
};

export default PopularCourseScreen;

const styles = StyleSheet.create({
  popularCourseTouchableStyle: {
    flex: 1,
    marginHorizontal: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    maxWidth: width * 0.43,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  imageStyle: {
    width: "100%",
    height: 123,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
