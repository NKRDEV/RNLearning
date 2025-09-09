import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";

const { width } = Dimensions.get("window");

const CategoryScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`categoryScreen:${key}`);
  }

  const catergoryList = [
    {
      key: "1",
      image: require("../../assets/images/category1.png"),
      icon: require("../../assets/images/icons/icon1.png"),
      title: "Business",
    },
    {
      key: "2",
      image: require("../../assets/images/category2.png"),
      icon: require("../../assets/images/icons/icon2.png"),
      title: "Design",
    },
    {
      key: "3",
      image: require("../../assets/images/category3.png"),
      icon: require("../../assets/images/icons/icon3.png"),
      title: "Helth",
    },
    {
      key: "4",
      image: require("../../assets/images/category2.png"),
      icon: require("../../assets/images/icons/icon4.png"),
      title: "Marketing",
    },
    {
      key: "5",
      image: require("../../assets/images/category4.png"),
      icon: require("../../assets/images/icons/icon5.png"),
      title: "Programming",
    },
    {
      key: "6",
      image: require("../../assets/images/category5.png"),
      icon: require("../../assets/images/icons/icon6.png"),
      title: "Music",
    },
    {
      key: "7",
      image: require("../../assets/images/category6.png"),
      icon: require("../../assets/images/icons/icon7.png"),
      title: "Photography",
    },
    {
      key: "8",
      image: require("../../assets/images/category7.png"),
      icon: require("../../assets/images/icons/icon8.png"),
      title: "SEO",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.renderItemStyle}
        onPress={() =>
          navigation.push("recommended/recommendedScreen", {
            headerTitle: item.title,
          })
        }
      >
        <ImageBackground source={item.image} style={styles.imageStyle}>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: Default.fixPadding,
            }}
          >
            <Image
              source={item.icon}
              style={{ width: 16, height: 16, resizeMode: "contain" }}
            />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16white,
                marginHorizontal: Default.fixPadding * 0.5,
                maxWidth: 110,
              }}
            >
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const categoryFlatList = () => {
    return (
      <FlatList
        numColumns={2}
        data={catergoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
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
        <Header title={tr("catergory")} navigation={navigation} />
        {categoryFlatList()}
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 93,
    justifyContent: "center",
    alignItems: "center",
  },
  renderItemStyle: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: width / 2.32,
    marginHorizontal: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
  },
});
