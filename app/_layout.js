import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { withTranslation } from "react-i18next";
import { LogBox, StatusBar, AppState } from "react-native";
import { Stack, useSegments } from "expo-router";
import i18n from "../languages/index"; //don't remove this line
import { useEffect } from "react";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

LogBox.ignoreAllLogs();

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

const MainNavigation = () => {
  const segments = useSegments();

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (_) => {
      StatusBar.setBarStyle("light-content");
    });

    return () => {
      subscription.remove();
    };
  }, [segments]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="onboarding/onboardingScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="auth/loginScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="auth/signUpScreen" />
      <Stack.Screen name="auth/otpVerificationScreen" />
      <Stack.Screen
        name="(tabs)"
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="category/categoryScreen" />
      <Stack.Screen name="recommended/recommendedScreen" />
      <Stack.Screen name="popularCourse/popularCourseScreen" />
      <Stack.Screen name="notification/notificationScreen" />
      <Stack.Screen name="detail/detailScreen" />
      <Stack.Screen name="creditCard/creditCardScreen" />
      <Stack.Screen
        name="success/successScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="viewProfile/viewProfileScreen" />
      <Stack.Screen name="videoDetail/videoDetailScreen" />
      <Stack.Screen name="qAndA/qAndAScreen" />
      <Stack.Screen name="download/downloadScreen" />
      <Stack.Screen name="rateAndReview/rateAndReviewScreen" />
      <Stack.Screen name="editProfile/editProfileScreen" />
      <Stack.Screen name="notificationSetting/notificationSettingsScreen" />
      <Stack.Screen name="language/languageScreen" />
      <Stack.Screen name="setting/settingScreen" />
      <Stack.Screen name="termsAndCondition/termsAndConditionScreen" />
      <Stack.Screen name="helpAndSupport/helpAndSupportScreen" />
      <Stack.Screen name="changePassword/changePasswordScreen" />
    </Stack>
  );
};

const ReloadAppOnLanguageChange = withTranslation("translation", {
  bindI18n: "languageChanged",
  bindStore: false,
})(MainNavigation);

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("./../assets/fonts/Roboto-Bold.ttf"),
    Regular: require("./../assets/fonts/Roboto-Regular.ttf"),
    Medium: require("./../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <ReloadAppOnLanguageChange />;
}
