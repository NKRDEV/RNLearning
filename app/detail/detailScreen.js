import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Dimensions,
  Share,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import GradientStars from "../../components/gradientStars";
import SnackbarToast from "../../components/snackbarToast";
import { LinearGradient } from "expo-linear-gradient";
import Stars from "react-native-stars";
import { ProgressBar } from "react-native-paper";
import MaskedView from "@react-native-masked-view/masked-view";
import { BottomSheet } from "react-native-btr";
import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const AboutTab = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`aboutTab:${key}`);
  }

  const courseDetail = () => {
    return (
      <View style={styles.courseDetailViewStyle}>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium16black,
            marginBottom: Default.fixPadding * 1.2,
          }}
        >
          {tr("courseBrief")}
        </Text>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
              }}
            >
              <AntDesign name="clockcircle" size={15} color={Colors.primary} />
              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
                  {tr("totalTiming")}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.Medium14black,
                    marginTop: Default.fixPadding * 0.6,
                  }}
                >
                  36 hours
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                marginTop: Default.fixPadding * 2,
              }}
            >
              <Ionicons
                name="shield-checkmark"
                size={16}
                color={Colors.primary}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
                  {tr("accessibility")}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.Medium14black,
                    marginTop: Default.fixPadding * 0.6,
                  }}
                >
                  Life Time
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
              }}
            >
              <Entypo name="tv" size={15} color={Colors.primary} />
              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
                  {tr("totalVideo")}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.Medium14black,
                    marginTop: Default.fixPadding * 0.6,
                  }}
                >
                  35 Video
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                marginTop: Default.fixPadding * 2,
              }}
            >
              <Ionicons
                name="calendar-clear-sharp"
                size={16}
                color={Colors.primary}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
                  {tr("courseUploaded")}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.Medium14black,
                    marginTop: Default.fixPadding * 0.6,
                  }}
                >
                  20 March 2020
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const description = () => {
    return (
      <View style={styles.descriptionViewStyle}>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginBottom: Default.fixPadding * 1.2,
            ...Fonts.Medium16black,
          }}
        >
          {tr("description")}
        </Text>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginBottom: Default.fixPadding,
            ...Fonts.Regular14grey,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas
          a, sapien consequat. Pretium, accumsan aliquet parturient imperdiet
          leo.
        </Text>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginBottom: Default.fixPadding,
            ...Fonts.Regular14grey,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas
          a, sapien consequat. Pretium, accumsan aliquet parturient imperdiet
          leo.
        </Text>
      </View>
    );
  };

  const createBy = () => {
    return (
      <View style={styles.descriptionViewStyle}>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            marginBottom: Default.fixPadding * 1.2,
            ...Fonts.Medium16black,
          }}
        >
          {tr("createBy")}
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: isRtl ? "row-reverse" : "row",
          }}
        >
          <Image
            source={require("../../assets/images/users/user1.png")}
            style={{ width: 54, height: 54, borderRadius: 27 }}
          />

          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginHorizontal: Default.fixPadding * 1.6,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
                  Margarita storosin
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.Regular14grey,
                    marginTop: Default.fixPadding * 0.2,
                  }}
                >
                  New York
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.push("viewProfile/viewProfileScreen")}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.Medium14primary,
                    maxWidth: 90,
                  }}
                >
                  {tr("viewProfile")}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginTop: Default.fixPadding * 2,
                marginLeft: isRtl ? 0 : Default.fixPadding * 1.6,
                marginRight: isRtl ? Default.fixPadding * 1.6 : 0,
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
                  <FontAwesome
                    name="star"
                    size={13}
                    color={Colors.lightYellow}
                  />

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
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
        {courseDetail()}
        {description()}
        {createBy()}
      </ScrollView>
    </View>
  );
};

const VideoTab = () => {
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  const videoList = [
    {
      key: "1",
      title: "What is the digital marketing?",
      time: "02:56 min",
    },
    {
      key: "2",
      title: "Importance of digital marketing.",
      time: "02:56 min",
    },
    {
      key: "3",
      title: "How to conduct a competitive analysis?",
      time: "02:56 min",
    },
    {
      key: "4",
      title: "What is SEO?",
      time: "02:56 min",
    },
    {
      key: "5",
      title: "Definition of social media marketing and social media.",
      time: "02:56 min",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginTop: index === 0 ? Default.fixPadding * 2 : 0,
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.renderItemVideoStyle,
        }}
      >
        <Ionicons name="play-circle" size={18} color={Colors.primary} />
        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding,
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

  const videoFlatList = () => {
    return (
      <FlatList
        data={videoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {videoFlatList()}
    </View>
  );
};

const ReviewTab = () => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`reviewTab:${key}`);
  }

  const overallRating = () => {
    return (
      <View style={styles.overallRatingViewStyle}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: Default.fixPadding * 2,
            ...Fonts.Medium16black,
          }}
        >
          {tr("overallRating")}
        </Text>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginBottom: Default.fixPadding * 0.7,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Regular16black, overflow: "hidden" }}
            >
              4.5
            </Text>
            <View style={{ marginVertical: Default.fixPadding * 0.4 }}>
              <Stars
                disabled
                default={5}
                count={5}
                spacing={3}
                half={false}
                fullStar={
                  <FontAwesome name="star" size={12} color={Colors.primary} />
                }
              />
            </View>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Regular14grey,
                maxWidth: 100,
              }}
            >
              {`(125 ${tr("review")})`}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: isRtl ? 0 : Default.fixPadding * 1.7,
              marginRight: isRtl ? Default.fixPadding * 1.7 : 0,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginBottom: Default.fixPadding * 0.9,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 45,
                }}
              >
                5 {tr("star")}
              </Text>

              <View
                style={{
                  flex: 1,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <ProgressBar
                  progress={0.75}
                  color={Colors.primary}
                  style={{
                    height: 4,
                    backgroundColor: Colors.gallery,
                  }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 40,
                  textAlign: isRtl ? "left" : "right",
                }}
              >
                99
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginBottom: Default.fixPadding * 0.9,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 45,
                }}
              >
                4 {tr("star")}
              </Text>

              <View
                style={{
                  flex: 1,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <ProgressBar
                  progress={0.6}
                  color={Colors.primary}
                  style={{
                    height: 4,
                    backgroundColor: Colors.gallery,
                  }}
                />
              </View>

              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 40,
                  textAlign: isRtl ? "left" : "right",
                }}
              >
                12
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginBottom: Default.fixPadding * 0.9,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 45,
                }}
              >
                3 {tr("star")}
              </Text>

              <View
                style={{
                  flex: 1,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <ProgressBar
                  progress={0.5}
                  color={Colors.primary}
                  style={{
                    height: 4,
                    backgroundColor: Colors.gallery,
                  }}
                />
              </View>

              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 40,
                  textAlign: isRtl ? "left" : "right",
                }}
              >
                07
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginBottom: Default.fixPadding * 0.9,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 45,
                }}
              >
                2 {tr("star")}
              </Text>

              <View
                style={{
                  flex: 1,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <ProgressBar
                  progress={0.2}
                  color={Colors.primary}
                  style={{
                    height: 4,
                    backgroundColor: Colors.gallery,
                  }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 40,
                  textAlign: isRtl ? "left" : "right",
                }}
              >
                04
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  marginLeft: isRtl ? 0 : Default.fixPadding * 0.3,
                  marginRight: isRtl ? Default.fixPadding * 0.3 : 0,
                  maxWidth: 45,
                }}
              >
                1 {tr("star")}
              </Text>

              <View
                style={{
                  flex: 1,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                <ProgressBar
                  progress={0.1}
                  color={Colors.primary}
                  style={{
                    height: 4,
                    backgroundColor: Colors.gallery,
                  }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Regular14grey,
                  maxWidth: 40,
                  textAlign: isRtl ? "left" : "right",
                }}
              >
                02
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const studentFeedbackList = [
    {
      key: "1",
      image: require("../../assets/images/users/user2.png"),
      name: "Aklima Akatar",
      date: "20 march 2020",
      rating: "4.5",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ut adipiscing convallis ac non hendrerit. Venenatis, nec ac facilisis quis nam. Mattis pharetra, ultrices elit posuere a facilisis ac. Nunc, tortor lorem mattis aliquam.",
    },
    {
      key: "2",
      image: require("../../assets/images/users/user1.png"),
      name: "Margarita storosin",
      date: "20 march 2020",
      rating: "4.5",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ut adipiscing convallis ac non hendrerit. Venenatis, nec ac facilisis quis nam. Mattis pharetra, ultrices elit posuere a facilisis ac. Nunc, tortor lorem mattis aliquam.",
    },
    {
      key: "3",
      image: require("../../assets/images/users/user2.png"),
      name: "Aklima Akatar",
      date: "20 march 2020",
      rating: "4.5",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ut adipiscing convallis ac non hendrerit. Venenatis, nec ac facilisis quis nam. Mattis pharetra, ultrices elit posuere a facilisis ac. Nunc, tortor lorem mattis aliquam.",
    },
  ];
  const studentFeedback = () => {
    return (
      <View style={{ ...styles.studentFeedbackViewStyle }}>
        <View style={styles.studentFeedbackHeaderViewStyle}>
          <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
            {tr("studentFeedback")}
          </Text>
        </View>

        <View style={{ marginTop: Default.fixPadding * 2 }}>
          {studentFeedbackList.map((item) => {
            return (
              <View
                key={item.key}
                style={{
                  marginHorizontal: Default.fixPadding * 2,
                  marginBottom: Default.fixPadding * 2,
                }}
              >
                <View
                  style={{
                    flexDirection: isRtl ? "row-reverse" : "row",
                    marginBottom: Default.fixPadding * 1.5,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                  <View
                    style={{
                      flex: 1,
                      alignItems: isRtl ? "flex-end" : "flex-start",
                      marginHorizontal: Default.fixPadding * 1.5,
                    }}
                  >
                    <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
                      {item.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        ...Fonts.Medium14grey,
                        marginTop: Default.fixPadding * 0.5,
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: isRtl ? "row-reverse" : "row",
                      alignItems: "center",
                    }}
                  >
                    <MaskedView
                      style={{
                        height: 14,
                      }}
                      maskElement={<FontAwesome name="star" size={14} />}
                    >
                      <LinearGradient
                        colors={[Colors.yellow, Colors.darkPrimary]}
                        style={{ flex: 1 }}
                      >
                        <FontAwesome
                          name="star"
                          size={14}
                          color={Colors.transparent}
                        />
                      </LinearGradient>
                    </MaskedView>
                    <Text
                      numberOfLines={1}
                      style={{
                        ...Fonts.Medium14grey,
                        maxWidth: 40,
                        marginLeft: isRtl ? 0 : Default.fixPadding * 0.3,
                        marginRight: isRtl ? Default.fixPadding * 0.3 : 0,
                      }}
                    >
                      {item.rating}
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Regular14grey,
                  }}
                >
                  {item.feedback}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
        {overallRating()}
        {studentFeedback()}
      </ScrollView>
    </View>
  );
};

const DetailScreen = () => {
  const { course } = useLocalSearchParams();

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`detailScreen:${key}`);
  }

  const shareMessage = () => {
    Share.share({
      message: "E-learning",
    });
  };

  const [openSubscribeBottomSheet, setOpenSubscribeBottomSheet] =
    useState(false);

  const [like, setLike] = useState(true);

  const [toastTitle, setToastTile] = useState();
  const [visibleToast, setVisibleToast] = useState(false);
  const onDismiss = () => setVisibleToast(false);

  const header = () => {
    return (
      <View style={{ backgroundColor: Colors.white }}>
        <MyStatusBar />
        <ImageBackground
          source={require("../../assets/images/headerImg.png")}
          style={{ width: width, height: 286 }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              ...styles.headerViewStyle,
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
        </ImageBackground>
        <View
          style={{
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginTop: Default.fixPadding * 2,
            marginBottom: Default.fixPadding,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Bold22black }}>
            {course}
          </Text>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginVertical: Default.fixPadding * 0.8,
            }}
          >
            <GradientStars rating={5} size={16} />
            <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
              {` (125 ${tr("review")})`}
            </Text>
          </View>
          <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
            By Margarita storosin
          </Text>
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
        tabStyle={{ borderBottomWidth: 4, borderBottomColor: Colors.gallery }}
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

        <Tabs.Tab name={"videoTab"} label={tr("video")}>
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <VideoTab />
          </Tabs.ScrollView>
        </Tabs.Tab>

        <Tabs.Tab name={"reviewTab"} label={tr("review")}>
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <ReviewTab />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    );
  };
  const bottomButtonAndView = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        <View style={styles.lifetimeSubscriptionViewStyle}>
          <Text numberOfLines={1} style={{ ...Fonts.Regular14grey }}>
            {tr("lifetimeSubscription")}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Bold18black,
              marginTop: Default.fixPadding * 0.6,
            }}
          >
            $138
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setOpenSubscribeBottomSheet(true);
          }}
          activeOpacity={0.8}
          style={styles.subscribeButtonStyle}
        >
          <Text numberOfLines={1} style={{ ...Fonts.Bold18white }}>
            {tr("subscribe")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const paymentMethodList = [
    {
      name: "Credit card/Debit Card",
    },
    {
      name: "Net banking",
    },
    {
      name: "Other UPI app",
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState(
    "Credit card/Debit Card"
  );

  const renderItemPayment = ({ item }) => {
    const isSelected = selectedPayment === item.name;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setSelectedPayment(item.name);
          setOpenSubscribeBottomSheet(false);
          navigation.push("creditCard/creditCardScreen");
        }}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.paymentTouchableStyle,
        }}
      >
        {isSelected ? (
          <MaskedView
            style={{ height: 18 }}
            maskElement={
              <MaterialCommunityIcons name="record-circle" size={18} />
            }
          >
            <LinearGradient
              colors={[Colors.yellow, Colors.darkPrimary]}
              style={{ flex: 1 }}
            >
              <MaterialCommunityIcons
                name="record-circle"
                size={18}
                color={Colors.transparent}
              />
            </LinearGradient>
          </MaskedView>
        ) : (
          <MaterialCommunityIcons
            name="circle-outline"
            size={18}
            color={Colors.extraLightGrey}
          />
        )}

        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Regular16black,
            marginHorizontal: Default.fixPadding,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const subscribeBottomSheet = () => {
    return (
      <BottomSheet
        visible={openSubscribeBottomSheet}
        onBackButtonPress={() => setOpenSubscribeBottomSheet(false)}
        onBackdropPress={() => setOpenSubscribeBottomSheet(false)}
      >
        <View style={styles.bottomSheetViewStyle}>
          <Text style={styles.paymentMethodTextStyle}>
            {tr("paymentMethod")}
          </Text>

          <FlatList
            data={paymentMethodList}
            renderItem={renderItemPayment}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: Default.fixPadding * 1.3 }}
          />
        </View>
      </BottomSheet>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {tabContainer()}
      {bottomButtonAndView()}
      {openSubscribeBottomSheet && <View>{subscribeBottomSheet()}</View>}
      <SnackbarToast
        visible={visibleToast}
        title={toastTitle}
        onDismiss={onDismiss}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: Default.fixPadding * 2,
  },
  courseDetailViewStyle: {
    margin: Default.fixPadding * 2,
    paddingVertical: Default.fixPadding * 1.6,
    paddingHorizontal: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  descriptionViewStyle: {
    paddingVertical: Default.fixPadding * 1.6,
    paddingHorizontal: Default.fixPadding * 2,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  renderItemVideoStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
  },
  overallRatingViewStyle: {
    paddingVertical: Default.fixPadding * 1.7,
    paddingHorizontal: Default.fixPadding * 0.9,
    margin: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  studentFeedbackViewStyle: {
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  studentFeedbackHeaderViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 1.6,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gallery,
  },
  lifetimeSubscriptionViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 0.5,
    height: 60,
    backgroundColor: Colors.white,
    ...Default.shadow,
    borderTopWidth: 1,
    borderTopColor: Colors.gallery,
  },
  subscribeButtonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Default.fixPadding * 1.7,
    height: 60,
    backgroundColor: Colors.primary,
    ...Default.shadowPrimary,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
  },
  bottomSheetViewStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: Default.fixPadding * 3,
    paddingBottom: Default.fixPadding,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  paymentMethodTextStyle: {
    ...Fonts.Medium22black,
    textAlign: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 1.2,
  },
  paymentTouchableStyle: {
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 8,
    paddingVertical: Default.fixPadding * 1.3,
    paddingHorizontal: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
});
