import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { getPostbyCategory } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

import PostCard from "../../components/PostCard";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../../components/EmptyState";

const Bookmark = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getPostbyCategory(user.category));
  console.log(posts);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <PostCard
            title={item.Title}
            creator={item.creator.username}
            attachment={item.attachment}
            avatar={item.creator.avatar}
            image={item.image}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
