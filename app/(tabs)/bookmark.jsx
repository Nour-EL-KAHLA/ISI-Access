import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

import {
  getAllPosts,
  getPostbyCategory,
  updateCategory,
} from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

import PostCard from "../../components/PostCard";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";

const Bookmark = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() =>
    getPostbyCategory(user?.category)
  );
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

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
            description={item.description}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Posts Found"
            subtitle="No Posts found for this category"
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-2xl font-psemibold text-white">
                  {user?.category}
                </Text>
              </View>
            </View>

            <SearchInput />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Bookmark;
