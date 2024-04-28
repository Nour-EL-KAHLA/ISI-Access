import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-mineralgreen rounded-lg min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className="font-psemibold text-lg text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
