import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import { SwipeListView } from "react-native-swipe-list-view";
import SnackbarToast from "../../components/snackbarToast";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`notificationScreen:${key}`);
  }

  const [notificationToast, setNotificationToast] = useState(false);
  const onDismissNotificationToast = () => setNotificationToast(false);

  const todayNotificationList = [
    {
      key: "1",
      title: "You purchase ui/ux course",
      time: "2 minutes ago",
      image: require("../../assets/images/img11.png"),
    },
    {
      key: "2",
      title: "You purchase ux research",
      time: "7 minutes ago",
      image: require("../../assets/images/img4.png"),
    },
  ];

  const [todayData, setTodayData] = useState(
    todayNotificationList.map((NotificationItem, i) => ({
      key: `${i}`,
      title: NotificationItem.title,
      time: NotificationItem.time,
      image: NotificationItem.image,
    }))
  );

  const closeRowToday = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRowToday = (rowMap, rowKey) => {
    closeRowToday(rowMap, rowKey);
    const newData = [...todayData];
    const prevIndex = todayData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setTodayData(newData);
  };

  const yesterdayNotificationList = [
    {
      key: "1",
      title:
        "Hariaesh lakhanv reply to your question on design course lecture 5.",
      time: "42 minutes ago",
      image: require("../../assets/images/img6.png"),
    },
    {
      key: "2",
      title: "Zankhi shah reply to your question on business course lecture 5.",
      time: "36 minutes ago",
      image: require("../../assets/images/img7.png"),
    },
    {
      key: "3",
      title: "You purchase ux research",
      time: "30 minutes ago",
      image: require("../../assets/images/img3.png"),
    },
  ];

  const [yesterdayData, setYesterdayData] = useState(
    yesterdayNotificationList.map((NotificationItem, i) => ({
      key: `${i}`,
      title: NotificationItem.title,
      time: NotificationItem.time,
      image: NotificationItem.image,
    }))
  );

  const closeRowYesterday = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRowYesterday = (rowMap, rowKey) => {
    closeRowYesterday(rowMap, rowKey);
    const newData = [...yesterdayData];
    const prevIndex = yesterdayData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setYesterdayData(newData);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: Colors.white }}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.renderItemViewStyle,
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
                ...Fonts.Regular12grey,
                marginTop: Default.fixPadding * 0.3,
              }}
            >
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHiddenItemToday = (data, rowMap) => {
    return (
      <TouchableOpacity
        style={{
          right: isRtl ? null : 0,
          ...styles.backRightBtnRight,
        }}
        onPress={() => {
          deleteRowToday(rowMap, data.item.key);
          setNotificationToast(true);
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

  const renderHiddenItemYesterday = (data, rowMap) => {
    return (
      <TouchableOpacity
        style={{
          right: isRtl ? null : 0,
          ...styles.backRightBtnRight,
        }}
        onPress={() => {
          deleteRowYesterday(rowMap, data.item.key);
          setNotificationToast(true);
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

  const listHeaderTodayNotification = () => {
    return (
      <View>
        {todayData.length === 0 ? null : (
          <SwipeListView
            data={todayData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItemToday}
            rightOpenValue={isRtl ? 0 : -40}
            leftOpenValue={isRtl ? 40 : 0}
            scrollEnabled={false}
            useNativeDriver={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Text
                  style={{
                    textAlign: isRtl ? "right" : "left",
                    ...styles.todayTextSTyle,
                  }}
                >
                  {tr("today")}
                </Text>
              );
            }}
          />
        )}
      </View>
    );
  };

  const listFooterYesterdayNotification = () => {
    return (
      <View>
        {yesterdayData.length === 0 ? null : (
          <SwipeListView
            data={yesterdayData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItemYesterday}
            rightOpenValue={isRtl ? 0 : -40}
            leftOpenValue={isRtl ? 40 : 0}
            scrollEnabled={false}
            useNativeDriver={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Text
                  style={{
                    textAlign: isRtl ? "right" : "left",
                    marginTop:
                      todayData.length === 0 ? Default.fixPadding * 2 : 0,
                    ...styles.yesterdayTextStyle,
                  }}
                >
                  {tr("yesterday")}
                </Text>
              );
            }}
          />
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={tr("notification")} navigation={navigation} />

        {todayData.length === 0 && yesterdayData.length === 0 ? (
          <View style={styles.emptyViewStyle}>
            <MaterialCommunityIcons
              name="bell-off"
              size={48}
              color={Colors.extraLightGrey}
            />
            <Text
              style={{
                ...Fonts.Medium16extraLightGrey,
                marginTop: Default.fixPadding,
              }}
            >
              {tr("noNotificationYet")}
            </Text>
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={listHeaderTodayNotification()}
            ListFooterComponent={listFooterYesterdayNotification()}
            showsVerticalScrollIndicator={false}
          />
        )}
        <SnackbarToast
          title={tr("removed")}
          visible={notificationToast}
          onDismiss={onDismissNotificationToast}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  emptyViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 2,
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  renderItemViewStyle: {
    alignItems: "center",
    paddingVertical: Default.fixPadding,
    paddingHorizontal: Default.fixPadding * 2,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  todayTextSTyle: {
    ...Fonts.Bold18primary,
    marginTop: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 1.2,
    marginHorizontal: Default.fixPadding * 2,
  },
  yesterdayTextStyle: {
    ...Fonts.Bold16grey,
    marginBottom: Default.fixPadding * 1.2,
    marginHorizontal: Default.fixPadding * 2,
  },
  backRightBtnRight: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 39,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.crimson,
  },
});
