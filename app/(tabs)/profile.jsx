import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import out from "../../assets/icons/logout.png";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut, updateCategory } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

import PostCard from "../../components/PostCard";
import InfoBox from "../../components/InfoBox";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (categ) => {
    setSubmitting(true);
    try {
      await updateCategory(categ).then((res) => setUser(res));
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  const Category = (props) => {
    const { name } = props;

    const handlePress = () => {
      onSubmit(name); // This will invoke onSubmit with the category name
    };
    const cat = user?.category;
    return (
      <CustomButton
        textStyles={`text-lg `}
        title={name}
        handlePress={handlePress} // Pass the function reference, not the result of onSubmit
        containerStyles="mt-14 w-24 px-4 mx-1 my-4 bg-[#ff8aa8] min-h-[30px]"
        isLoading={isSubmitting}
        selected={name == cat}
      />
    );
  };

  // setSubmitting(true);

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/");
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
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image source={out} resizeMode="contain" className="w-6 h-6" />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              {{ uri: user?.avatar !== "" } && (
                <Image
                  source={{ uri: user?.avatar }}
                  className="w-[90%] h-[90%] rounded-lg"
                  resizeMode="cover"
                />
              )}
              {/* <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              /> */}
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            {posts?.length != 0 && (
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mt-2"
              />
            )}
            <View className="w-full  mt-22  flex flex-row justify-center items-center">
              <Category name="1IDL" />
              <Category name="1ISEOC" />
              <Category name="1IDISC" />
            </View>
            <View className="w-full  mt-22  flex flex-row justify-center items-center">
              <Category name="2IDL" />
              <Category name="2ISEOC" />
              <Category name="2IDISC" />
            </View>
            <View className="w-full   mt-22  flex flex-row justify-center items-center">
              <Category name="2ISEOC" />
              <Category name="3ISEOC" />
              <Category name="3IDISC" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
