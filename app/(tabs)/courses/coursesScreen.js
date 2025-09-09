import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { ProgressBar } from "react-native-paper";

const CoursesScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`coursesScreen:${key}`);
  }

  const header = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.headerViewStyle,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Bold22black,
          }}
        >
          {tr("myCourses")}
        </Text>
        <Feather
          name="search"
          size={22}
          color={Colors.grey}
          onPress={() => navigation.navigate("search/searchScreen")}
        />
      </View>
    );
  };

  const myCourseList = [
    {
      key: "1",
      image: require("../../../assets/images/img1.png"),
      course: "Web Devlopment Course",
      lesson: "Total 20 lesson",
      time: "40 hr 50 min",
    },
    {
      key: "2",
      image: require("../../../assets/images/img2.png"),
      course: "Web Devlopment Bootcamp",
      lesson: "Total 20 lesson",
      time: "40 hr 50 min",
    },
    {
      key: "3",
      image: require("../../../assets/images/img3.png"),
      course: "React-The Complete Guide",
      lesson: "Total 20 lesson",
      time: "40 hr 50 min",
    },
    {
      key: "4",
      image: require("../../../assets/images/img6.png"),
      course: "Javascript Zero To Hero",
      lesson: "Total 20 lesson",
      time: "40 hr 50 min",
    },
    {
      key: "5",
      image: require("../../../assets/images/img4.png"),
      course: "The Paython Mega Course",
      lesson: "Total 20 lession",
      time: "40 hr 50 min",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.push("videoDetail/videoDetailScreen")}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.renderItemTouchableStyle,
        }}
      >
        <Image source={item.image} style={styles.imageStyle} />
        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
            marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Medium16primary }}>
            {item.course}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Medium14black,
              marginVertical: Default.fixPadding,
            }}
          >
            {item.lesson}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Medium14grey,
              marginRight: isRtl ? 0 : Default.fixPadding * 3.5,
              marginLeft: isRtl ? Default.fixPadding * 3.5 : 0,
            }}
          >
            {item.time}
          </Text>
        </View>

        <View
          style={{
            right: isRtl ? null : 0,
            left: isRtl ? 0 : null,
            ...styles.playPositionViewStyle,
          }}
        >
          <MaskedView
            style={{ height: 29 }}
            maskElement={<Ionicons size={29} name={"play-circle"} />}
          >
            <LinearGradient
              colors={[Colors.yellow, Colors.darkPrimary]}
              style={{ flex: 1 }}
            >
              <Ionicons
                size={29}
                name={"play-circle"}
                color={Colors.transparent}
              />
            </LinearGradient>
          </MaskedView>
        </View>
      </TouchableOpacity>
    );
  };

  const ongoingCourse = () => {
    return (
      <View style={styles.ongoingCourseViewStyle}>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Bold22darkPurple,
          }}
        >
          {tr("ongoingCourse")}
        </Text>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginTop: Default.fixPadding * 1.2,
          }}
        >
          <Image
            source={require("../../../assets/images/img11.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View style={{ flex: 1, marginHorizontal: Default.fixPadding }}>
            <Text
              numberOfLines={1}
              style={{
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Bold16primary,
              }}
            >
              Full UX/UI Design
            </Text>
            <View
              style={{
                flex: 1,
                marginVertical: Default.fixPadding,
              }}
            >
              <ProgressBar
                progress={0.4}
                color={Colors.primary}
                style={{
                  height: 8,
                  backgroundColor: Colors.lightGallery,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              numberOfLines={1}
              style={{
                textAlign: isRtl ? "left" : "right",
                ...Fonts.Bold14primary,
              }}
            >{`40% ${tr("completed")}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  const coursesTitleAndList = () => {
    return (
      <FlatList
        data={myCourseList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {ongoingCourse()}
            <View
              style={{
                marginBottom: Default.fixPadding * 1.2,
                marginHorizontal: Default.fixPadding * 2,
              }}
            >
              <Text
                style={{
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Bold18black,
                }}
              >
                {tr("yourPurchaseCourses")}
              </Text>
            </View>
          </View>
        }
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {header()}
        {coursesTitleAndList()}
      </View>
    </View>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 2,
    paddingVertical: Default.fixPadding * 1.5,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  renderItemTouchableStyle: {
    alignItems: "center",
    padding: Default.fixPadding * 0.8,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  imageStyle: {
    width: 105,
    height: 105,
    borderRadius: 8,
  },
  playPositionViewStyle: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: Default.fixPadding * 0.8,
  },
  ongoingCourseViewStyle: {
    borderRadius: 10,
    padding: Default.fixPadding,
    marginTop: Default.fixPadding * 2,
    marginBottom: Default.fixPadding,
    marginHorizontal: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
