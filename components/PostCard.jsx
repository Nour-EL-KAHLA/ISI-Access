import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import file from "../assets/icons/file.png";

const PostCard = ({
  title,
  creator,
  avatar,
  attachment,
  image,
  description,
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            ></Image>
          </View>
          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>

            {/* <TouchableOpacity onPress={() => Linking.openURL(attachment)}>
              <Text
                className="font-psemibold text-base
               text-[#ff8aa8]"
              >
                URL
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
        {attachment && (
          <View className="pt-4">
            <TouchableOpacity onPress={() => Linking.openURL(attachment)}>
              <Image source={file} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {image && (
        <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center">
          <Image
            className="w-full h-60 rounded-xl mt-3"
            source={{ uri: image }}
          ></Image>
        </TouchableOpacity>
      )}
      <Text className="w-full text-gray-300 rounded-xl text-xs mt-3 relative justify-center items-center">
        {description}
      </Text>
      {/* <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {Title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: attachment }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        ></TouchableOpacity>
      )} */}
    </View>
  );
};

export default PostCard;
