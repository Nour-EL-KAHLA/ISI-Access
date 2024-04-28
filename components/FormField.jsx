import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icon";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full border-2 h-16 px-4 bg-neutral-100 justify-center border-transparent flex-row focus:border-mineralgreen rounded-xl items-center">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7B7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
