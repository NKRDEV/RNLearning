import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SnackbarToast from "../../components/snackbarToast";
import { useVideoPlayer, VideoView } from "expo-video";

const CourseIncludedTab = () => {
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  const courseIncludedList = [
    {
      key: "1",
      image: require("../../assets/images/img15.png"),
      title: "Introduction to ux design and  wirefram- UX design",
      time: "30 min",
    },
    {
      key: "2",
      image: require("../../assets/images/img16.png"),
      title: "Difference between ux design and ui design- UX design",
      time: "30 min",
    },
    {
      key: "3",
      image: require("../../assets/images/img4.png"),
      title: "Introduction to ux design and wirefram- UX design",
      time: "30 min",
    },
    {
      key: "4",
      image: require("../../assets/images/img7.png"),
      title: "Difference between ux design and ui design- UX design",
      time: "30 min",
    },
    {
      key: "5",
      image: require("../../assets/images/img6.png"),
      title: "Introduction to ux design and wirefram- UX design",
      time: "30 min",
    },
    {
      key: "6",
      image: require("../../assets/images/img3.png"),
      title: "Difference between ux design and ui design- UX design",
      time: "30 min",
    },
    {
      key: "7",
      image: require("../../assets/images/img13.png"),
      title: "Introduction to ux design and wirefram- UX design",
      time: "30 min",
    },
    {
      key: "8",
      image: require("../../assets/images/img15.png"),
      title: "Difference between ux design and ui design- UX design",
      time: "30 min",
    },
  ];

  const renderItemCourseIncluded = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: index === 0 ? Default.fixPadding * 2.5 : 0,
          ...styles.courseIncludedViewStyle,
        }}
      >
        <ImageBackground source={item.image} style={styles.imageStyle}>
          <Ionicons name="play-circle-sharp" size={21} color={Colors.white} />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
            marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Regular16black,
            }}
          >
            {item.title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Regular14grey,
              marginTop: Default.fixPadding * 0.5,
            }}
          >
            {item.time}
          </Text>
        </View>
      </View>
    );
  };
  const courseIncludedFlatList = () => {
    return (
      <FlatList
        data={courseIncludedList}
        renderItem={renderItemCourseIncluded}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        scrollEnabled={false}
      />
    );
  };

  return <View style={{ flex: 1 }}>{courseIncludedFlatList()}</View>;
};

const MoreTab = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`videoDetailScreen:${key}`);
  }

  const shareMessage = () => {
    Share.share({
      message: "E-learning",
    });
  };

  const moreList = [
    {
      key: "1",
      icon: Ionicons,
      iconName: "help-circle",
      navigateTo: "qAndA/qAndAScreen",
      title: "Q & A",
    },
    {
      key: "2",
      icon: Ionicons,
      iconName: "alert-circle",
      title: tr("courseDescription"),
    },
    {
      key: "3",
      icon: Ionicons,
      iconName: "share-social",
      title: tr("shareCourse"),
    },
    {
      key: "4",
      icon: Ionicons,
      iconName: "heart",
      title: tr("addWishlist"),
    },
    {
      key: "5",
      icon: Feather,
      iconName: "upload",
      navigateTo: "download/downloadScreen",
      title: tr("download"),
    },
    {
      key: "6",
      icon: MaterialCommunityIcons,
      iconName: "thumb-up",
      navigateTo: "rateAndReview/rateAndReviewScreen",
      title: tr("rateReview"),
    },
    {
      key: "7",
      icon: FontAwesome5,
      iconName: "globe",
      navigateTo: "recommended/recommendedScreen",
      title: tr("viewSimilarCourses"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderTopColor: Colors.gallery,
          borderTopWidth: index === 0 ? null : 2,
        }}
      >
        <TouchableOpacity
          disabled={item.key === "2" || item.key === "4"}
          activeOpacity={0.8}
          onPress={() => {
            if (item.key === "3") {
              shareMessage();
            } else if (item.key === "7") {
              navigation.push(item.navigateTo, {
                headerTitle: tr("similarCourse"),
              });
            } else {
              navigation.push(item.navigateTo);
            }
          }}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.moreTouchableStyle,
          }}
        >
          <item.icon name={item.iconName} size={20} color={Colors.primary} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              marginHorizontal: Default.fixPadding,
              ...Fonts.Medium16black,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const moreFlatList = () => {
    return (
      <FlatList
        data={moreList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    );
  };

  return <View style={{ flex: 1 }}>{moreFlatList()}</View>;
};

const VideoDetailScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`videoDetailScreen:${key}`);
  }

  const shareMessage = () => {
    Share.share({
      message: "E-learning",
    });
  };

  const [like, setLike] = useState(true);

  const [toastTitle, setToastTile] = useState();
  const [visibleToast, setVisibleToast] = useState(false);
  const onDismiss = () => setVisibleToast(false);

  const player = useVideoPlayer(
    "http://139.59.39.129/video/BigBuckBunny.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      player.play();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      player.pause();
    });

    return unsubscribe;
  }, [navigation]);
  const header = () => {
    return (
      <View>
        <MyStatusBar />

        <VideoView
          style={{ width: "100%", height: 251 }}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          contentFit="cover"
        />
        <View style={styles.headerViewStyle}>
          <SafeAreaView />
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: Default.fixPadding * 2,
            }}
          >
            <Ionicons
              name={isRtl ? "chevron-forward" : "chevron-back"}
              size={25}
              color={Colors.white}
              onPress={() => navigation.pop()}
            />

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={like ? "heart" : "heart-outline"}
                size={24}
                color={Colors.white}
                onPress={() => {
                  setLike((prev) => !prev);
                  if (like) {
                    setToastTile(tr("removed"));
                  } else {
                    setToastTile(tr("added"));
                  }
                  setVisibleToast(true);
                }}
              />
              <FontAwesome5
                name="share-alt"
                size={24}
                color={Colors.white}
                onPress={shareMessage}
                style={{
                  marginLeft: isRtl ? 0 : Default.fixPadding,
                  marginRight: isRtl ? Default.fixPadding : 0,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const customTabBar = (props) => {
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

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Tabs.Container
          renderHeader={header}
          renderTabBar={customTabBar}
          headerContainerStyle={{
            elevation: 0,
            shadowOpacity: 0,
          }}
        >
          <Tabs.Tab name={"courseIncludedTab"} label={tr("courseIncluded")}>
            <Tabs.ScrollView showsVerticalScrollIndicator={false}>
              <CourseIncludedTab />
            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name={"moreTab"} label={tr("more")}>
            <Tabs.ScrollView showsVerticalScrollIndicator={false}>
              <MoreTab />
            </Tabs.ScrollView>
          </Tabs.Tab>
        </Tabs.Container>

        <SnackbarToast
          visible={visibleToast}
          title={toastTitle}
          onDismiss={onDismiss}
        />
      </View>
    </View>
  );
};

export default VideoDetailScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  courseIncludedViewStyle: {
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 133,
    height: 77,
    borderRadius: 8,
  },
  moreTouchableStyle: {
    paddingVertical: Default.fixPadding * 2.5,
    paddingHorizontal: Default.fixPadding * 2,
  },
});
