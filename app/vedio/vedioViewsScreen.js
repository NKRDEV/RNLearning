import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList,  TouchableOpacity,Image } from "react-native";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";
import { Feather, Ionicons } from "@expo/vector-icons";


const VedioViewsScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`vedioViewsScreen:${key}`);
  }

  // const downloadList = [
  //   { key: "1", class: "Class-1", mb: "5.8 mb", views: 1200, seen: true },
  //   { key: "2", class: "Class-2", mb: "5.8 mb", views: 980, seen: false },
  //   { key: "3", class: "Class-3", mb: "6.1 mb", views: 1450, seen: true },
  //   { key: "4", class: "Class-4", mb: "5.4 mb", views: 320, seen: false },
  //   { key: "5", class: "Class-5", mb: "7.2 mb", views: 2100, seen: true },
  //   { key: "6", class: "Class-6", mb: "5.8 mb", views: 650, seen: false },
  // ];



   // Video list with thumbnail, title, and seen/unseen
  const [videoList, setVideoList] = useState([
    {
      id: "1",
      title: "Introduction to React Native",
      thumbnail: "https://img.youtube.com/vi/0-S5a0eXPoc/hqdefault.jpg",
      views: 1500,
      seen: true,
    },
    {
      id: "2",
      title: "Learn Navigation in React Native",
      thumbnail: "https://img.youtube.com/vi/f02mOEt11OQ/hqdefault.jpg",
      views: 820,
      seen: false,
    },
    {
      id: "3",
      title: "Fetch Data from API",
      thumbnail: "https://img.youtube.com/vi/4UZrsTqkcW4/hqdefault.jpg",
      views: 2300,
      seen: true,
    },
    {
      id: "4",
      title: "Build Login UI",
      thumbnail: "https://img.youtube.com/vi/mkualZPRZCs/hqdefault.jpg",
      views: 540,
      seen: false,
    },
     {
      id: "5",
      title: "Fetch Data from API",
      thumbnail: "https://img.youtube.com/vi/4UZrsTqkcW4/hqdefault.jpg",
      views: 2300,
      seen: true,
    },
    {
      id: "6",
      title: "Build Login UI",
      thumbnail: "https://img.youtube.com/vi/mkualZPRZCs/hqdefault.jpg",
      views: 540,
      seen: false,
    },
     {
      id: "7",
      title: "Fetch Data from API",
      thumbnail: "https://img.youtube.com/vi/4UZrsTqkcW4/hqdefault.jpg",
      views: 2300,
      seen: true,
    },
    {
      id: "8",
      title: "Build Login UI",
      thumbnail: "https://img.youtube.com/vi/mkualZPRZCs/hqdefault.jpg",
      views: 540,
      seen: false,
    },
  ]);

    const toggleSeen = (id) => {
    setVideoList((prev) =>
      prev.map((v) => (v.id === id ? { ...v, seen: !v.seen } : v))
    );
  };


  // const renderItem = ({ item, index }) => {
  //   const backgroundColor = item.seen ? "#d4edda" : "#f8d7da"; // light green / light red
  //   const borderColor = item.seen ? "green" : "red";
   //   return (
  //      <View
  //       style={[
  //         styles.renderItemViewStyle,
  //         {
  //           flexDirection: isRtl ? "row-reverse" : "row",
  //           borderTopWidth: index === 0 ? 0 : 2,
  //           backgroundColor,
  //         //  borderLeftWidth: 5,
  //          // borderLeftColor: borderColor,
  //         },
  //       ]}
  //     >
  //       <Ionicons
  //         name="play-circle"
  //         size={30}
  //         color={item.seen ? "green" : "red"}
  //       />
  //       <View
  //         style={{
  //           flex: 1,
  //           alignItems: isRtl ? "flex-end" : "flex-start",
  //           marginHorizontal: Default.fixPadding * 1.5,
  //         }}
  //       >
  //         <Text numberOfLines={1} style={{ ...Fonts.Bold16black }}>
  //           {item.class}
  //         </Text>
  //         <Text
  //           numberOfLines={1}
  //           style={{
  //             ...Fonts.Regular14grey,
  //             marginTop: Default.fixPadding * 0.3,
  //           }}
  //         >
  //           {item.mb}
  //         </Text>
  //          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
  //               <Ionicons name="eye" size={16} color="gray" style={{ marginRight: 4,marginTop:7 }} />
  //               <Text style={{  ...Fonts.Regular14grey,
  //                            marginTop: Default.fixPadding * 0.3,}}>
  //               {item.views}
  //               </Text>
  //           </View>
  //       </View>
  //       {/* <Feather name="download" size={24} color={Colors.grey} /> */}
  //     </View>
  //   );
  // };


    const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => toggleSeen(item.id)}
      style={[
        styles.card,
        {
          backgroundColor: item.seen ? "#d4edda" : "#f8d7da",
         // borderLeftColor: item.seen ? "green" : "red",
        },
      ]}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.row}>
          <Ionicons name="eye" size={16} color="gray" />
          <Text style={styles.views}>{item.views} views</Text>
        </View>
      </View>
      <Ionicons
        name="play-circle"
        size={36}
        color={item.seen ? "green" : "red"}
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  );

  const downloadFlatList = () => {
    return (
      <FlatList
        data={videoList}
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
        <Header title={tr("myvideos")} navigation={navigation} />
        {downloadFlatList()}
      </View>
    </View>
  );
};

export default VedioViewsScreen;

const styles = StyleSheet.create({
  renderItemViewStyle: {
    alignItems: "center",
    borderTopColor: Colors.gallery,
    padding: Default.fixPadding * 2,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  //  backgroundColor: "#fff",
    borderRadius: 17,
    //borderLeftWidth: 6,
    padding: 10,
   // marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  //  elevation: 2,
    margin:10
  },
  thumbnail: {
    width: 100,
    height: 70,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  views: {
    fontSize: 13,
    color: "gray",
    marginLeft: 5,
  },
});


