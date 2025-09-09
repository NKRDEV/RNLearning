import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Default, Fonts } from "../../constants/styles";
import Header from "../../components/header";

const QAndAScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  function tr(key) {
    return t(`qAndAScreen:${key}`);
  }

  const data = [
    {
      key: "1",
      image: require("../../assets/images/img5.png"),
      name: "Human Akhatar",
      date: "1-1-2021",
      class: "class-6",
      subData: [
        {
          key: "1",
          image: require("../../assets/images/img5.png"),
          name: "Human Akhatar",
          date: "1-1-2021",
          other:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel odio vitae, convallis vivamus commodo elit, tincidunt. Nibh elementum facilisi id nec. ",
        },
      ],
    },
    {
      key: "2",
      image: require("../../assets/images/img5.png"),
      name: "Human Akhatar",
      date: "1-1-2021",
      class: "class-6",
      subData: [
        {
          key: "1",
          image: require("../../assets/images/img5.png"),
          name: "Human Akhatar",
          date: "1-1-2021",
          other:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel odio vitae, convallis vivamus commodo elit, tincidunt. Nibh elementum facilisi id nec. ",
        },
      ],
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderTopColor: Colors.gallery,
          borderTopWidth: index === 0 ? null : 2,
          padding: Default.fixPadding * 2,
        }}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <Image source={item.image} style={styles.imageStyle} />
          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginHorizontal: Default.fixPadding,
            }}
          >
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Medium16black,
                }}
              >
                {item.name}
              </Text>
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Medium14grey, maxWidth: 70 }}
              >
                {item.class}
              </Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Medium14grey,
                marginTop: Default.fixPadding * 0.3,
              }}
            >
              {item.date}
            </Text>
          </View>
        </View>
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.Medium14primary,
            textAlign: isRtl ? "right" : "left",
            marginTop: Default.fixPadding * 0.5,
            marginLeft: isRtl ? 0 : Default.fixPadding * 5.8,
            marginRight: isRtl ? Default.fixPadding * 5.8 : 0,
          }}
        >
          {tr("question")}
        </Text>

        {item.subData.map((value) => {
          return (
            <View
              key={item.key}
              style={{
                marginLeft: isRtl ? 0 : Default.fixPadding * 1.8,
                marginRight: isRtl ? Default.fixPadding * 1.8 : 0,
                marginTop: Default.fixPadding * 2.2,
              }}
            >
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                }}
              >
                <Image source={value.image} style={styles.subImageStyle} />
                <View
                  style={{
                    flex: 1,
                    alignItems: isRtl ? "flex-end" : "flex-start",
                    marginHorizontal: Default.fixPadding,
                  }}
                >
                  <Text numberOfLines={1} style={{ ...Fonts.Medium16black }}>
                    {value.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      ...Fonts.Medium14grey,
                      marginTop: Default.fixPadding * 0.3,
                    }}
                  >
                    {value.date}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Regular14grey,
                  marginLeft: isRtl ? 0 : Default.fixPadding * 4.2,
                  marginRight: isRtl ? Default.fixPadding * 4.2 : 0,
                  marginTop: Default.fixPadding,
                }}
              >
                {value.other}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const flatList = () => {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const addNewQuestion = () => {
    return (
      <View style={styles.addNewQuestionViewStyle}>
        <Text style={{ ...Fonts.Bold18white }}>{tr("addNewQuestion")}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header title={"Q & A"} navigation={navigation} />
        {flatList()}
        {addNewQuestion()}
      </View>
    </View>
  );
};

export default QAndAScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  subImageStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  addNewQuestionViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: Default.fixPadding * 1.5,
    backgroundColor: Colors.primary,
    ...Default.shadowPrimary,
  },
});
