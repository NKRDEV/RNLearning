import React, { useCallback, useState } from "react";
import { Tabs } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Colors, Default } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import { Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import SnackbarToast from "../../components/snackbarToast";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function Layout() {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`layout:${key}`);
  }
  const [visibleToast, setVisibleToast] = useState(false);
  const onDismissVisibleToast = () => setVisibleToast(false);

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
        backHandler.remove();
      };
    }, [exitApp])
  );

  const GradientIcon = ({ Icon, iconName, focused }) => (
    <MaskedView
      style={{ height: 22, marginBottom: Default.fixPadding * 0.5 }}
      maskElement={<Icon size={22} name={iconName} />}
    >
      <LinearGradient
        colors={[Colors.yellow, Colors.darkPrimary]}
        style={{ flex: 1 }}
      >
        <Icon
          size={22}
          name={iconName}
          color={focused ? Colors.transparent : Colors.extraLightGrey}
        />
      </LinearGradient>
    </MaskedView>
  );

  const GradientText = ({ title, focused }) => {
    return (
      <MaskedView
        maskElement={
          <Text numberOfLines={1} style={{ ...styles.textStyle }}>
            {title}
          </Text>
        }
      >
        <LinearGradient colors={[Colors.yellow, Colors.darkPrimary]}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.textStyle,
              color: focused ? Colors.transparent : Colors.extraLightGrey,
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </MaskedView>
    );
  };

  const customTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          height: 60,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const getIconName = (routeName) => {
            if (routeName === "home/homeScreen") {
              return "home";
            } else if (routeName === "search/searchScreen") {
              return "search";
            } else if (routeName === "courses/coursesScreen") {
              return "play";
            } else if (routeName === "wishlist/wishlistScreen") {
              return "heart";
            } else if (routeName === "profile/profileScreen") {
              return "user";
            }
          };

          const getIcon = (routeName) => {
            if (routeName === "home/homeScreen") {
              return Entypo;
            } else if (routeName === "search/searchScreen") {
              return Feather;
            } else if (routeName === "courses/coursesScreen") {
              return Ionicons;
            } else if (routeName === "wishlist/wishlistScreen") {
              return Ionicons;
            } else if (routeName === "profile/profileScreen") {
              return FontAwesome;
            }
          };

          return (
            <View key={index} style={{ flex: 1 }}>
              {isFocused && (
                <LinearGradient
                  colors={[Colors.yellow, Colors.darkPrimary]}
                  style={styles.borderStyle}
                />
              )}
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GradientIcon
                  Icon={getIcon(route.name)}
                  iconName={getIconName(route.name)}
                  focused={isFocused}
                />

                <GradientText title={label} focused={isFocused} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const bottomTab = () => {
    return (
      <Tabs
        initialRouteName="home/homeScreen"
        tabBar={customTabBar}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name={"home/homeScreen"}
          options={{
            title: tr("home"),
          }}
        />
        <Tabs.Screen
          name={"search/searchScreen"}
          options={{
            title: tr("search"),
          }}
        />
        <Tabs.Screen
          name={"courses/coursesScreen"}
          options={{
            title: tr("courses"),
          }}
        />
        <Tabs.Screen
          name={"wishlist/wishlistScreen"}
          options={{
            title: tr("wishlist"),
          }}
        />
        <Tabs.Screen
          name={"profile/profileScreen"}
          options={{
            title: tr("profile"),
          }}
        />
      </Tabs>
    );
  };
  return (
    <>
      {bottomTab()}
      <SnackbarToast
        visible={visibleToast}
        title={tr("tapBack")}
        onDismiss={onDismissVisibleToast}
      />
    </>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontFamily: "Regular",
  },
  imageStyle: {
    width: 22,
    height: 22,
  },
  borderStyle: {
    height: 2,
    position: "absolute",
    width: "100%",
  },
});
