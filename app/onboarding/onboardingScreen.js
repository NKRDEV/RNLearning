import React, { useState, useRef, useCallback } from "react";
import {
  View,
  BackHandler,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Default, Fonts, Colors } from "../../constants/styles";
import SnackbarToast from "../../components/snackbarToast";
import { useNavigation } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`onboardingScreen:${key}`);
  }

  const [visibleToast, setVisibleToast] = useState(false);
  const onDismiss = () => setVisibleToast(false);

  const [exitApp, setExitApp] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (Platform.OS === "android") {
          setTimeout(() => {
            setExitApp(0);
          }, 2000);

          if (exitApp === 0) {
            setExitApp(exitApp + 1);
            setVisibleToast(true);
          } else if (exitApp === 1) {
            BackHandler.exitApp();
          }
          return true;
        }
      };
      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        backHandler.remove()
      };
    }, [exitApp])
  );

  const ref = useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != onboardingSlides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const onboardingSlides = [
    {
      key: "1",
      image: require("../../assets/images/onboarding/image1.png"),
      title: tr("title1"),
      description:
        "Lorem ipsum dolor sit amet consectetur. justo eu dui neque neque. Elementum in velit egtas nisl enim a luctus neque. ",
    },
    {
      key: "2",
      image: require("../../assets/images/onboarding/image2.png"),
      title: tr("title2"),
      description:
        "Lorem ipsum dolor sit amet consectetur. justo eu dui neque neque. Elementum in velit egtas nisl enim a luctus neque. ",
    },
    {
      key: "3",
      image: require("../../assets/images/onboarding/image3.png"),
      title: tr("title3"),
      description:
        "Lorem ipsum dolor sit amet consectetur. justo eu dui neque neque. Elementum in velit egtas nisl enim a luctus neque. ",
    },
  ];

  const renderItemSlides = ({ item }) => {
    return (
      <View style={{ width: width }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={item.image} style={{ width: 333, height: 333 }} />
        </View>
        <View style={styles.titleViewStyle}>
          <Text numberOfLines={1} style={{ ...Fonts.Bold22black }}>
            {item.title}
          </Text>
          <Text numberOfLines={3} style={styles.descriptionTextStyle}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const onboardingFlatList = () => {
    return (
      <FlatList
        ref={ref}
        horizontal
        pagingEnabled
        data={onboardingSlides}
        renderItem={renderItemSlides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const listFooterComponent = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.bottomViewStyle,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (currentSlideIndex == onboardingSlides.length - 1) {
            } else {
              navigation.push("auth/loginScreen");
            }
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              ...(currentSlideIndex == onboardingSlides.length - 1
                ? Fonts.Bold12transparent
                : Fonts.Bold12black),
              maxWidth: 100,
            }}
          >
            {tr("skip")}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.dotWrapperStyle,
          }}
        >
          {onboardingSlides.map((_, index) => (
            <View
              key={index}
              style={{
                ...(currentSlideIndex == index
                  ? styles.activeDotIndicatorStyle
                  : styles.dotIndicatorStyle),
              }}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => {
            if (currentSlideIndex == onboardingSlides.length - 1) {
              navigation.push("auth/loginScreen");
            } else {
              goToNextSlide();
            }
          }}
        >
          <Text
            numberOfLines={1}
            style={{ ...Fonts.Bold12primary, maxWidth: 100 }}
          >
            {currentSlideIndex == onboardingSlides.length - 1
              ? tr("login")
              : tr("next")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {onboardingFlatList()}
        {listFooterComponent()}
      </View>

      <SnackbarToast
        visible={visibleToast}
        title={tr("tapBack")}
        onDismiss={onDismiss}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  dotWrapperStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  dotIndicatorStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: Default.fixPadding * 0.3,
    backgroundColor: Colors.lightPrimary,
  },
  activeDotIndicatorStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: Default.fixPadding * 0.3,
    backgroundColor: Colors.crimson,
  },
  bottomViewStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: Default.fixPadding * 2,
  },
  descriptionTextStyle: {
    ...Fonts.Regular14grey,
    textAlign: "center",
    marginTop: Default.fixPadding,
    marginBottom: Default.fixPadding * 3,
  },
  titleViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
  },
});
