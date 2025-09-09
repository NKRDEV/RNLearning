import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import SnackbarToast from "../../../components/snackbarToast";
import MaskedView from "@react-native-masked-view/masked-view";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`wishlistScreen:${key}`);
  }

  const [removeToast, setRemoveToast] = useState(false);
  const onDismissToast = () => setRemoveToast(false);

  const header = () => {
    return (
      <View style={styles.headerViewStyle}>
        <Text
          style={{ textAlign: isRtl ? "right" : "left", ...Fonts.Bold22black }}
        >
          {tr("wishlist")}
        </Text>
      </View>
    );
  };

  const wishList = [
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
  ];

  const [wishlistData, setWishlistData] = useState(
    wishList.map((item, i) => ({
      key: `${i}`,
      image: item.image,
      course: item.course,
      lesson: item.lesson,
      time: item.time,
    }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...wishlistData];
    const prevIndex = wishlistData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setWishlistData(newData);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: Colors.white }}>
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
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <TouchableOpacity
        style={{
          right: isRtl ? null : 0,
          ...styles.backRightBtnRight,
        }}
        onPress={() => {
          deleteRow(rowMap, data.item.key);
          setRemoveToast(true);
        }}
      >
        <MaterialCommunityIcons
          name="trash-can"
          size={24}
          color={Colors.white}
        />
      </TouchableOpacity>
    );
  };

  const wishListSwipeListView = () => {
    return (
      <>
        {wishlistData.length === 0 ? (
          <View style={styles.emptyViewStyle}>
            <Ionicons name="heart" size={48} color={Colors.extraLightGrey} />
            <Text
              style={{
                ...Fonts.Regular24extraLightGrey,
                marginTop: Default.fixPadding,
              }}
            >
              {tr("emptyWishlist")}
            </Text>
            <Text style={styles.itFeelLikeTextStyle}>{tr("itFeelLike")}</Text>
          </View>
        ) : (
          <SwipeListView
            data={wishlistData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={isRtl ? 0 : -58}
            leftOpenValue={isRtl ? 58 : 0}
            useNativeDriver={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: Default.fixPadding * 2 }}
          />
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {header()}
        {wishListSwipeListView()}
        <SnackbarToast
          title={tr("removed")}
          visible={removeToast}
          onDismiss={onDismissToast}
          style={styles.toastStyle}
        />
      </View>
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    paddingHorizontal: Default.fixPadding * 2,
    paddingVertical: Default.fixPadding * 1.5,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  toastStyle: { position: "absolute", left: 0, right: 0, bottom: 0 },
  backRightBtnRight: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 57,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  emptyViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
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
  itFeelLikeTextStyle: {
    ...Fonts.Regular18extraLightGrey,
    textAlign: "center",
    marginTop: Default.fixPadding * 0.5,
    marginHorizontal: Default.fixPadding * 2,
  },
});
