import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../constants/image";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
export default function App() {
  return (
    <LinearGradient
      colors={["#005573", "#232d4b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView className="h-full ">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center gap-y-16 h-full px-4">
            <Image
              source={image.logo}
              className="w-80 h-40"
              resizeMode="contain"
            />
            <View className="mt-5 relative">
              <Text className="text-white text-3xl font-bold text-center mt-4">
                Find Your Partner {"\n"} Destination With{" "}
                <Text className="text-accentred">Us</Text>
              </Text>
              <Image
                source={image.path}
                className="w-[100px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>
            <CustomButton
              title="Let's start"
              handlePress={() => router.push("sign-in")}
              containerStyles="w-full mt-10"
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#005573" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}
