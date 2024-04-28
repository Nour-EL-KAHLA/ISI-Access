import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import image from "../../constants/image";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <LinearGradient
      colors={["#005573", "#232d4b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView className="h-full ">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-start min-h-full px-4 mt-16">
            <Image
              source={image.logo}
              resizeMode="contain"
              className="w-[100px] h-[70px]"
            />
            <Text className="text-2xl text-white font-psemibold mt-10 ">
              Log in to Go<Text className="text-accentred">&</Text>Go
            </Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Log in"
              containerStyles="mt-20"
              handlePress={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignIn;
