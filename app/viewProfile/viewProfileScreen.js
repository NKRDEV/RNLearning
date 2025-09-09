import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Share,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import GradientStars from "../../components/gradientStars";
import { LinearGradient } from "expo-linear-gradient";

const AboutTab = () => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`viewProfileScreen:${key}`);
  }

  const [readMore, setReadMore] = useState(true);

  const about = () => {
    return (
      <View style={styles.aboutViewStyle}>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium16black,
          }}
        >
          {tr("about")} Margarita
        </Text>
        <Text
          style={{
            ...Fonts.Regular14grey,
            textAlign: isRtl ? "right" : "left",
            marginTop: Default.fixPadding * 1.2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris
          quis venenatis accumsan suspendisse rutrum sit. Porta egestas turpis
          odio ultrices. Ut congue tempor, eget viverra aliquam dolor faucibus.
          Consectetur ipsum, pellentesque quis mi neque pellentesque neque, id
          faucibus. Donec nec faucibus aliquam tortor, arcu viverra tincidunt
          aliquam. Lectus enim, egestas fermentum odio.
        </Text>
        <Text
          style={{
            ...Fonts.Regular14grey,
            textAlign: isRtl ? "right" : "left",
            marginTop: Default.fixPadding,
          }}
        >
          {readMore
            ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris quis venenatis accumsan suspendisse rutrum sit. Porta egestas turpis odio ultrices. Ut congue tempor, eget viverra aliquam dolor faucibus.Consectetur ipsum, pellentesque quis mi neque pellentesque neque, id faucibus. Donec nec faucibus aliquam tortor, arcu viverra tincidunt aliquam. Lectus enim, egestas fermentum`
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris quis venenatis accumsan suspendisse rutrum sit. Porta egestas turpis odio ultrices. Ut congue tempor, eget viverra aliquam dolor faucibus.Consectetur ipsum, pellentesque quis mi neque pellentesque neque, id faucibus. Donec nec faucibus aliquam tortor, arcu viverra tincidunt aliquam. Lectus enim, egestas fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin mauris quis venenatis accumsan suspendisse rutrum sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris quis venenatis accumsan suspendisse rutrum sit..`}
          <Text
            onPress={() => setReadMore((prev) => !prev)}
            style={{ ...Fonts.Regular14primary }}
          >
            {readMore ? ` ${tr("readMore")}` : ` ${tr("readLess")}`}
          </Text>
        </Text>
      </View>
    );
  };

  const socialLink = () => {
    return (
      <View style={styles.socialLinkViewStyle}>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginHorizontal: Default.fixPadding * 2,
            ...Fonts.Medium16black,
          }}
        >
          {tr("socialLink")}
        </Text>

        <ScrollView
          horizontal
          style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: Default.fixPadding * 1.2,
            paddingHorizontal: Default.fixPadding * 2,
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: Colors.blue, ...styles.circleStyle }}
          >
            <FontAwesome name="facebook" size={20} color={Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.sky,
              ...styles.circleStyle,
              marginHorizontal: Default.fixPadding,
            }}
          >
            <FontAwesome name="twitter" size={20} color={Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity>
            <LinearGradient
              colors={[
                Colors.lightOrange,
                Colors.darkOrange,
                Colors.pink,
                Colors.extraDarkPink,
                Colors.purple,
              ]}
              style={styles.circleStyle}
            >
              <FontAwesome name="instagram" size={20} color={Colors.white} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.darkBlue,
              ...styles.circleStyle,
              marginHorizontal: Default.fixPadding,
            }}
          >
            <FontAwesome name="linkedin" size={20} color={Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: Colors.darkRed, ...styles.circleStyle }}
          >
            <FontAwesome name="youtube-play" size={20} color={Colors.white} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
        {about()}
        {socialLink()}
      </ScrollView>
    </View>
  );
};

const CourseTab = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`viewProfileScreen:${key}`);
  }
  const courseList = [
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
          ...styles.courseTouchableStyle,
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

  const courseFlatList = () => {
    return (
      <FlatList
        data={courseList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {courseFlatList()}
    </View>
  );
};

const ViewProfileScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`viewProfileScreen:${key}`);
  }

  const shareMessage = () => {
    Share.share({
      message: "E-learning",
    });
  };

  const header = () => {
    return (
      <View>
        <MyStatusBar />
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.headerViewStyle,
          }}
        >
          <Ionicons
            name={isRtl ? "chevron-forward" : "chevron-back"}
            size={25}
            color={Colors.black}
            onPress={() => navigation.pop()}
          />

          <FontAwesome5
            name="share-alt"
            size={24}
            color={Colors.black}
            onPress={shareMessage}
          />
        </View>
        {profileDetail()}
      </View>
    );
  };

  const profileDetail = () => {
    return (
      <View style={styles.profileDetailViewStyle}>
        <Image
          source={require("../../assets/images/users/user1.png")}
          style={styles.topImageStyle}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
            Margarita storosin
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Regular14grey,
              marginTop: Default.fixPadding * 0.5,
            }}
          >
            New York
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginVertical: Default.fixPadding * 2,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.Medium14black }}>
              886
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Medium14grey,
                marginTop: Default.fixPadding * 0.3,
              }}
            >
              {tr("subscribed")}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: Default.fixPadding * 0.5,
            }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.Medium14black }}>
              39
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Medium14grey,
                marginTop: Default.fixPadding * 0.3,
              }}
            >
              {tr("courses")}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="star" size={13} color={Colors.lightYellow} />

              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Medium14black,
                  marginLeft: isRtl ? 0 : Default.fixPadding * 0.5,
                  marginRight: isRtl ? Default.fixPadding * 0.5 : 0,
                }}
              >
                4.5 <Text style={{ ...Fonts.Medium14grey }}>(125)</Text>
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Medium14grey,
                marginTop: Default.fixPadding * 0.3,
              }}
            >
              {tr("averageRating")}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const CustomTabBar = (props) => {
    return (
      <MaterialTabBar
        {...props}
        activeColor={Colors.primary}
        inactiveColor={Colors.grey}
        inactiveOpacity={1}
        labelStyle={{
          fontFamily: "Medium",
          fontSize: 16,
          numberOfLines: 1,
        }}
        style={{
          backgroundColor: Colors.white,
        }}
        indicatorStyle={{
          backgroundColor: Colors.primary,
          height: 4,
        }}
        tabStyle={{
          borderBottomWidth: 4,
          borderBottomColor: Colors.gallery,
        }}
      />
    );
  };

  const tabContainer = () => {
    return (
      <Tabs.Container
        renderHeader={header}
        renderTabBar={(props) => {
          return <CustomTabBar {...props} />;
        }}
        headerContainerStyle={{
          elevation: 0,
          shadowOpacity: 0,
        }}
      >
        <Tabs.Tab name={"aboutTab"} label={tr("about")}>
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <AboutTab />
          </Tabs.ScrollView>
        </Tabs.Tab>

        <Tabs.Tab name={"courseTab"} label={tr("course")}>
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <CourseTab />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {tabContainer()}
      </View>
    </View>
  );
};

export default ViewProfileScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 2,
    paddingVertical: Default.fixPadding * 1.6,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  profileDetailViewStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 6,
    marginBottom: Default.fixPadding,
    paddingHorizontal: Default.fixPadding * 2.5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  topImageStyle: {
    alignSelf: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: -Default.fixPadding * 4,
    marginBottom: Default.fixPadding * 0.9,
  },
  courseTouchableStyle: {
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 0.9,
    paddingVertical: Default.fixPadding * 0.9,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  aboutViewStyle: {
    borderRadius: 10,
    padding: Default.fixPadding * 1.5,
    margin: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  socialLinkViewStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    paddingVertical: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  circleStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
