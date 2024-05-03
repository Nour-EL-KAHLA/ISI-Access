import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import isiaccess from "../assets/images/isiaccess.png";
import girls from "../assets/images/girls.png";
import path from "../assets/images/path.png";
import { useGlobalContext } from "../context/GlobalProvider";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);

LogBox.ignoreAllLogs();

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={isiaccess}
            className="w-[150px] h-[84px]"
            resizeMode="contain"
          ></Image>
          <Image
            source={girls}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Connect{"\n"}
              With <Text className="text-secondary-200">ISI Access</Text>
            </Text>

            <Image
              source={path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
      <CustomButton
        title="Dive In"
        handlePress={() => router.push("/sign-in")}
        containerStyles="w-full mt-7"
      ></CustomButton>
      {/* you can see the statys bar light battery etc  */}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};
export default Welcome;
