import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  selected,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      // container style to get the style of her container to fit the full width of the screen and is loading so it looks you can't click it
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } ${selected ? " opacity-40 " : ""} `}
    >
      <Text
        className={`font-psemibold text-lg text-white ${textStyles} ${
          selected ? "text-black" : ""
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
