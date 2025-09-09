import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors, Default, Fonts } from "../../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import GradientStars from "../../../components/gradientStars";
import Animated, {
  SlideInRight,
  SlideOutRight,
  SlideOutLeft,
  SlideInLeft,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const SearchScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`searchScreen:${key}`);
  }

  const [search, setSearch] = useState();
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const header = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.headerViewStyle,
        }}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            marginRight: isRtl ? 0 : Default.fixPadding,
            marginLeft: isRtl ? Default.fixPadding : 0,
            ...styles.searchViewStyle,
          }}
        >
          <Feather name="search" size={20} color={Colors.primary} />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder={tr("search")}
            numberOfLines={1}
            placeholderTextColor={Colors.grey}
            selectionColor={Colors.primary}
            style={{
              textAlign: isRtl ? "right" : "left",
              ...styles.searchTextInputStyle,
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setOpenFilterModal(true)}
          style={styles.filterTouchableStyle}
        >
          <Feather name="align-center" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    );
  };

  const popularCourseList = [
    {
      key: "1",
      image: require("../../../assets/images/img4.png"),
      course: "Google ux design",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "2",
      image: require("../../../assets/images/img5.png"),
      course: "Data science",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "3",
      image: require("../../../assets/images/category5.png"),
      course: "Music",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "4",
      image: require("../../../assets/images/category2.png"),
      course: "Digital marketing",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "5",
      image: require("../../../assets/images/category6.png"),
      course: "Photography",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
    {
      key: "6",
      image: require("../../../assets/images/img11.png"),
      course: "Web design",
      by: "Albert portila",
      rating: 5,
      review: "125",
      price: "$25.00",
    },
  ];

  const renderItemPopularCourse = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.push("detail/detailScreen", { course: item.course })
        }
        style={styles.popularCourseTouchableStyle}
      >
        <Image source={item.image} style={styles.imageStyle} />

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
      </TouchableOpacity>
    );
  };

  const popularSearchList = [
    "Design",
    "Programming",
    "React",
    "SEO",
    "Marketing",
    "Business",
    "Web devlopment",
  ];

  const renderItemPopularSearch = ({ item }) => {
    return (
      <View style={styles.popularSearchViewStyle}>
        <Text numberOfLines={1} style={{ ...Fonts.Regular16grey }}>
          {item}
        </Text>
      </View>
    );
  };

  const popularSearchTitleAndList = () => {
    return (
      <View>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.popularSearchTextStyle,
          }}
        >
          {tr("popularSearch")}
        </Text>

        <FlatList
          numColumns={3}
          data={popularSearchList}
          renderItem={renderItemPopularSearch}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            alignSelf: isRtl ? "flex-end" : "flex-start",
            paddingHorizontal: Default.fixPadding * 1.25,
          }}
        />
      </View>
    );
  };

  const popularCourseFlatList = () => {
    return (
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={popularCourseList}
        renderItem={renderItemPopularCourse}
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          paddingHorizontal: Default.fixPadding,
        }}
        ListHeaderComponent={
          <View>
            {popularSearchTitleAndList()}
            <Text
              style={{
                textAlign: isRtl ? "right" : "left",
                ...styles.popularCourseTextStyle,
              }}
            >
              {tr("popularCourses")}
            </Text>
          </View>
        }
      />
    );
  };

  const categoriesList = [
    "Design",
    "Marketing",
    "Health",
    "Music",
    "Photography",
    "Programming",
    "Art",
  ];

  const [selectedCategories, setSelectedCategories] = useState("Marketing");

  const renderItemCategories = ({ item }) => {
    const isSelected = selectedCategories === item;

    return (
      <TouchableOpacity
        onPress={() => setSelectedCategories(item)}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          ...styles.renderItemCategoriesStyle,
        }}
      >
        {isSelected ? (
          <MaskedView
            style={{ height: 20 }}
            maskElement={
              <MaterialCommunityIcons name="record-circle" size={20} />
            }
          >
            <LinearGradient
              colors={[Colors.yellow, Colors.darkPrimary]}
              style={{ flex: 1 }}
            >
              <MaterialCommunityIcons
                name="record-circle"
                size={20}
                color={Colors.transparent}
              />
            </LinearGradient>
          </MaskedView>
        ) : (
          <MaterialCommunityIcons
            name="circle-outline"
            size={20}
            color={Colors.extraLightGrey}
          />
        )}

        <Text
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.commonTextStyle,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const priceList = ["Paid", "Free", "Both"];

  const [selectedPrice, setSelectedPrice] = useState("Paid");

  const renderItemPrice = ({ item, index }) => {
    const isSelected = selectedPrice === item;

    return (
      <TouchableOpacity
        onPress={() => setSelectedPrice(item)}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: index === 0 ? Default.fixPadding * 2 : 0,
          ...styles.renderItemCategoriesStyle,
        }}
      >
        {isSelected ? (
          <MaskedView
            style={{ height: 20 }}
            maskElement={
              <MaterialCommunityIcons name="record-circle" size={20} />
            }
          >
            <LinearGradient
              colors={[Colors.yellow, Colors.darkPrimary]}
              style={{ flex: 1 }}
            >
              <MaterialCommunityIcons
                name="record-circle"
                size={20}
                color={Colors.transparent}
              />
            </LinearGradient>
          </MaskedView>
        ) : (
          <MaterialCommunityIcons
            name="circle-outline"
            size={20}
            color={Colors.extraLightGrey}
          />
        )}

        <Text
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.commonTextStyle,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const priceTitleAndList = () => {
    return (
      <View>
        <Text
          style={{
            ...Fonts.Bold16black,
            textAlign: isRtl ? "right" : "left",
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("price")}
        </Text>
        <FlatList
          data={priceList}
          renderItem={renderItemPrice}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  };

  const levelList = [
    "All level",
    "Beginner",
    "Intermediate",
    "Advance",
    "Other",
  ];
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  const renderItemLevel = ({ item, index }) => {
    const isSelected = selectedLevel === item;

    return (
      <TouchableOpacity
        onPress={() => setSelectedLevel(item)}
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          marginTop: index === 0 ? Default.fixPadding * 2 : 0,
          ...styles.renderItemCategoriesStyle,
        }}
      >
        {isSelected ? (
          <MaskedView
            style={{ height: 20 }}
            maskElement={
              <MaterialCommunityIcons name="record-circle" size={20} />
            }
          >
            <LinearGradient
              colors={[Colors.yellow, Colors.darkPrimary]}
              style={{ flex: 1 }}
            >
              <MaterialCommunityIcons
                name="record-circle"
                size={20}
                color={Colors.transparent}
              />
            </LinearGradient>
          </MaskedView>
        ) : (
          <MaterialCommunityIcons
            name="circle-outline"
            size={20}
            color={Colors.extraLightGrey}
          />
        )}

        <Text
          numberOfLines={1}
          style={{
            textAlign: isRtl ? "right" : "left",
            ...styles.commonTextStyle,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const levelTitleAndList = () => {
    return (
      <View>
        <Text
          style={{
            ...Fonts.Bold16black,
            textAlign: isRtl ? "right" : "left",
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("level")}
        </Text>
        <FlatList
          data={levelList}
          renderItem={renderItemLevel}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  };

  const categoriesAndTitle = () => {
    return (
      <FlatList
        data={categoriesList}
        renderItem={renderItemCategories}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View
            style={{
              marginTop: Default.fixPadding * 3,
              marginBottom: Default.fixPadding * 2,
              marginHorizontal: Default.fixPadding * 2,
            }}
          >
            <Text
              style={{
                ...Fonts.Bold18black,
                textAlign: isRtl ? "right" : "left",
              }}
            >
              {tr("categories")}
            </Text>
          </View>
        }
        ListFooterComponent={
          <View>
            {priceTitleAndList()}
            {levelTitleAndList()}
          </View>
        }
      />
    );
  };

  const filterModal = () => {
    return (
      <Modal
        transparent
        animationType="none"
        visible={openFilterModal}
        onRequestClose={() => setOpenFilterModal(false)}
      >
        <SafeAreaView />
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setOpenFilterModal(false)}
          style={{ flex: 1 }}
        >
          <View
            style={{
              alignItems: isRtl ? "flex-start" : "flex-end",
              ...styles.modalBackViewStyle,
            }}
          >
            <TouchableWithoutFeedback>
              <Animated.View
                entering={isRtl ? SlideInLeft : SlideInRight}
                exiting={isRtl ? SlideOutLeft : SlideOutRight}
                style={styles.modalSubViewStyle}
              >
                <View style={styles.resetViewStyle}>
                  <Text numberOfLines={1} style={{ ...Fonts.Bold18primary }}>
                    {tr("reset")}
                  </Text>
                </View>
                {categoriesAndTitle()}

                <TouchableOpacity
                  onPress={() => setOpenFilterModal(false)}
                  style={styles.filterTouchableModalStyle}
                >
                  <Text numberOfLines={1} style={{ ...Fonts.Bold18white }}>
                    {tr("filter")}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        {header()}
        {popularCourseFlatList()}
        {filterModal()}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    alignItems: "center",
    padding: Default.fixPadding * 2,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  searchViewStyle: {
    flex: 1,
    alignItems: "center",
    height: 40,
    paddingHorizontal: Default.fixPadding * 0.7,
    borderRadius: 8,
    backgroundColor: Colors.gallery,
  },
  searchTextInputStyle: {
    flex: 1,
    ...Fonts.Regular14black,
    marginHorizontal: Default.fixPadding,
    padding: 0,
  },
  filterTouchableStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.gallery,
  },
  popularCourseTouchableStyle: {
    flex: 1,
    maxWidth: width * 0.43,
    marginHorizontal: Default.fixPadding,
    marginBottom: Default.fixPadding * 2,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  imageStyle: {
    width: "100%",
    height: 123,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  popularCourseTextStyle: {
    ...Fonts.Medium18black,
    marginHorizontal: Default.fixPadding * 2,
    marginBottom: Default.fixPadding,
    marginTop: Default.fixPadding * 0.5,
  },
  popularSearchTextStyle: {
    ...Fonts.Medium18black,
    marginHorizontal: Default.fixPadding * 2,
    marginTop: Default.fixPadding * 2,
    marginBottom: Default.fixPadding * 1.2,
  },
  popularSearchViewStyle: {
    flexShrink: 1,
    marginHorizontal: Default.fixPadding * 0.75,
    marginBottom: Default.fixPadding * 1.6,
    paddingVertical: Default.fixPadding,
    paddingHorizontal: Default.fixPadding * 1.8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    ...Default.shadow,
  },
  modalBackViewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.transparentBlack,
  },
  modalSubViewStyle: {
    width: width / 1.5,
    height: "100%",
    backgroundColor: Colors.white,
  },
  resetViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightMercury,
    paddingVertical: Default.fixPadding * 1.8,
    paddingHorizontal: Default.fixPadding,
  },
  renderItemCategoriesStyle: {
    alignItems: "center",
    marginHorizontal: Default.fixPadding * 4,
    marginBottom: Default.fixPadding * 2,
  },
  commonTextStyle: {
    flex: 1,
    ...Fonts.Regular16black,
    marginHorizontal: Default.fixPadding,
  },
  filterTouchableModalStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 1.5,
    backgroundColor: Colors.primary,
    ...Default.fixPadding,
  },
});
