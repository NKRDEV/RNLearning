import React from "react";
import Stars from "react-native-stars";
import MaskedView from "@react-native-masked-view/masked-view";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/styles";
import { LinearGradient } from "expo-linear-gradient";

const GradientStars = (props) => {
  const GradientIcon = () => (
    <MaskedView
      style={{ height: 16 }}
      maskElement={<FontAwesome size={props.size} name={"star"} />}
    >
      <LinearGradient
        colors={[Colors.yellow, Colors.cinnabar]}
        style={{ flex: 1 }}
      >
        <FontAwesome
          size={props.size}
          name={"star"}
          color={Colors.transparent}
        />
      </LinearGradient>
    </MaskedView>
  );

  return (
    <Stars
      disabled
      default={props.rating}
      count={5}
      half={false}
      spacing={4}
      fullStar={<GradientIcon name={"star"} size={props.size} />}
      emptyStar={
        <FontAwesome name={"star"} size={props.size} color={Colors.mercury} />
      }
    />
  );
};

export default GradientStars;
