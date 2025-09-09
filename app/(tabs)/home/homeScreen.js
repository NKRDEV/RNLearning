import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons } from "@expo/vector-icons";
import GradientStars from "../../../components/gradientStars";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`homeScreen:${key}`);
  }

  const header = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          marginHorizontal: Default.fixPadding * 2,
          marginVertical: Default.fixPadding * 1.2,
        }}
      >
        <LinearGradient
          colors={[Colors.yellow, Colors.darkPrimary]}
          style={styles.userGradientImageStyle}
        >
          <Image
            source={require("../../../assets/images/users/profile.png")}
            style={styles.userImageStyle}
          />
        </LinearGradient>

        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding * 1.5,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>{`${tr(
            "hello"
          )} Shriya`}</Text>
          <Text numberOfLines={1} style={{ ...Fonts.Regular14black }}>
            {tr("goodMorning")}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.push("notification/notificationScreen")}
        >
          <Octicons name="bell-fill" size={24} color={Colors.black} />
          <View
            style={{
              right: isRtl ? null : 2,
              left: isRtl ? 2 : null,
              ...styles.redDotStyle,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const banner = () => {
    return (
      <View style={{ marginBottom: Default.fixPadding * 2 }}>
        <ImageBackground
          source={require("../../../assets/images/banner.png")}
          style={{ width: "100%", height: 178, justifyContent: "flex-end" }}
        >
          <View
            style={{
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginHorizontal: Default.fixPadding * 3.2,
            }}
          >
            <Text style={{ ...Fonts.Bold16white }}>{tr("learnBasics")}</Text>
            <Text
              style={{
                ...Fonts.Bold18white,
                marginTop: Default.fixPadding * 0.5,
              }}
            >
              {tr("fullDesigns")}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.push("detail/detailScreen", {
                  course: "Full Ui and UX designs",
                })
              }
            >
              <LinearGradient
                colors={[Colors.yellow, Colors.darkPrimary]}
                style={styles.knowMoreTouchableStyle}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Bold16white }}>
                  {tr("knowMore")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const categoryList = [
    {
      key: "1",
      title: "Business",
      color: Colors.cornflowerBlue,
      icon: require("../../../assets/images/icons/icon1.png"),
    },
    {
      key: "2",
      title: "Design",
      color: Colors.green,
      icon: require("../../../assets/images/icons/icon2.png"),
    },
    {
      key: "3",
      title: "Health",
      color: Colors.orange,
      icon: require("../../../assets/images/icons/icon3.png"),
    },
    {
      key: "4",
      title: "Marketing",
      color: Colors.darkPink,
      icon: require("../../../assets/images/icons/icon4.png"),
    },
  ];

  const renderItemCategory = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          backgroundColor: item.color,
          ...styles.categoryViewStyle,
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 16, height: 16, resizeMode: "contain" }}
        />
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.Regular16white,
            marginLeft: isRtl ? 0 : Default.fixPadding * 0.5,
            marginRight: isRtl ? Default.fixPadding * 0.5 : 0,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  const category = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.commonViewStyle,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              marginRight: isRtl ? 0 : Default.fixPadding,
              marginLeft: isRtl ? Default.fixPadding : 0,
              ...Fonts.Bold18black,
            }}
          >
            {tr("catergory")}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push("category/categoryScreen")}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Regular14primary, maxWidth: 100 }}
            >
              {tr("seeAll")}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          inverted={isRtl}
          data={categoryList}
          renderItem={renderItemCategory}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: Default.fixPadding * 1.5,
          }}
        />
      </View>
    );
  };

  const recommendedList = [
    {
      key: "1",
      image: require("../../../assets/images/img1.png"),
      title: "Web Devlopment Course",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "2",
      image: require("../../../assets/images/img2.png"),
      title: "The Web Devlopment Bootcamp",
      rating: 5,
      review: "125",
      price: "$45",
    },
  ];

  const renderItemCommon = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.push("detail/detailScreen", { course: item.title })
        }
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: index === 0 ? Default.fixPadding * 1.1 : 0,
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
            {item.title}
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
  const recommended = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.commonViewStyle,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            textAlign: isRtl ? "right" : "left",
            marginRight: isRtl ? 0 : Default.fixPadding,
            marginLeft: isRtl ? Default.fixPadding : 0,
            ...Fonts.Bold18black,
          }}
        >
          {tr("recommended")}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.push("recommended/recommendedScreen", {
              headerTitle: tr("recommended"),
            })
          }
        >
          <Text
            numberOfLines={1}
            style={{ ...Fonts.Regular14primary, maxWidth: 100 }}
          >
            {tr("seeAll")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const popularCourseList = [
    {
      key: "1",
      image: require("../../../assets/images/img3.png"),
      course: "Google ux design",
      by: "Albert portila",
      price: "$25.00",
      rating: 5,
      review: "125",
    },
    {
      key: "2",
      image: require("../../../assets/images/img4.png"),
      course: "Google ux design",
      by: "Albert portila",
      price: "$25.00",
      rating: 5,
      review: "125",
    },
    {
      key: "3",
      image: require("../../../assets/images/img5.png"),
      course: "Data science",
      by: "Albert portila",
      price: "$25.00",
      rating: 5,
      review: "125",
    },
  ];

  const popularCourse = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.commonViewStyle,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              marginRight: isRtl ? 0 : Default.fixPadding,
              marginLeft: isRtl ? Default.fixPadding : 0,
              ...Fonts.Bold18black,
            }}
          >
            {tr("popularCourse")}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push("popularCourse/popularCourseScreen")}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Regular14primary, maxWidth: 100 }}
            >
              {tr("seeAll")}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularCourseMainViewStyle}>
          {popularCourseList.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.push("detail/detailScreen", { course: item.course })
              }
              key={index}
              style={{
                width:
                  index % 3 == 0
                    ? "100%"
                    : width / 2.0 - Default.fixPadding * 3,
                ...styles.popularSubViewStyle,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width:
                    index % 3 == 0
                      ? "100%"
                      : width / 2.0 - Default.fixPadding * 3,
                  height: index % 3 == 0 ? 123 : 138,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              {index % 3 === 0 ? (
                <View
                  style={{
                    flexDirection: isRtl ? "row-reverse" : "row",
                    padding: Default.fixPadding * 0.8,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: isRtl ? "flex-end" : "flex-start",
                      marginRight: isRtl ? 0 : Default.fixPadding,
                      marginLeft: isRtl ? Default.fixPadding : 0,
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
                    <Text numberOfLines={1} style={{ ...Fonts.Bold16primary }}>
                      {item.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: isRtl ? "row-reverse" : "row",
                      justifyContent: "center",
                    }}
                  >
                    <GradientStars rating={item.rating} size={16} />
                    <Text
                      numberOfLines={1}
                      style={{ ...Fonts.Regular14grey, maxWidth: 50 }}
                    >
                      {`(${item.review})`}
                    </Text>
                  </View>
                </View>
              ) : (
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
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const featureCourseList = [
    {
      key: "1",
      image: require("../../../assets/images/img1.png"),
      title: "Web Devlopment Course",
      rating: 5,
      review: "125",
      price: "$45",
    },
    {
      key: "2",
      image: require("../../../assets/images/img2.png"),
      title: "The Web Devlopment Bootcamp",
      rating: 5,
      review: "125",
      price: "$45",
    },
  ];

  const featureCourse = () => {
    return (
      <View>
        <Text
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            marginHorizontal: Default.fixPadding * 2,
            ...Fonts.Bold18black,
          }}
        >
          {tr("featureCourse")}
        </Text>

        <FlatList
          data={featureCourseList}
          keyExtractor={(item) => item.key}
          renderItem={renderItemCommon}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {header()}

        <FlatList
          data={recommendedList}
          keyExtractor={(item) => item.key}
          renderItem={renderItemCommon}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {banner()}
              {category()}
              {recommended()}
            </View>
          }
          ListFooterComponent={
            <View>
              {popularCourse()}
              {featureCourse()}
            </View>
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  userGradientImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 47,
    height: 47,
    borderRadius: 23.5,
  },
  userImageStyle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  redDotStyle: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.crimson,
  },
  knowMoreTouchableStyle: {
    width: 117,
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 0.6,
    marginTop: Default.fixPadding * 0.5,
    marginBottom: Default.fixPadding * 1.5,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  commonViewStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
  },
  categoryViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 0.5,
    marginTop: Default.fixPadding * 1.2,
    paddingVertical: Default.fixPadding * 0.9,
    paddingHorizontal: Default.fixPadding * 1.3,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    ...Default.shadow,
  },
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
  popularCourseMainViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 1.1,
  },
  popularSubViewStyle: {
    marginBottom: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    borderRadius: 10,
    ...Default.shadow,
  },
});
