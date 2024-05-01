// import { router } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { View, Image, FlatList, TouchableOpacity, Text } from "react-native";

// import logout from "../../assets/icons/logout.png";
// import useAppwrite from "../../lib/useAppwrite";
// import { signOut } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";

// const Profile = () => {
//   const { user, setUser, setIsLogged } = useGlobalContext();

//   const logout = async () => {
//     await signOut();
//     setUser(null);
//     setIsLogged(false);

//     router.replace("/sign-in");
//   };

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
//         <TouchableOpacity
//           onPress={logout}
//           className="flex w-full items-end mb-10"
//         >
//           <Text>LOGOUT</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Profile;
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import out from "../../assets/icons/logout.png";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut, updateCategory } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

import PostCard from "../../components/PostCard";
import InfoBox from "../../components/InfoBox";
import EmptyState from "../../components/EmptyState";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  // const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
  const [isSubmitting, setSubmitting] = useState(false);

  // const submit = async () => {
  //   await updateCategory("IDISC").then((res) => setUser(res));
  // };
  const submit = async () => {
    // if (form.username === "" || form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }

    setSubmitting(true);
    try {
      await updateCategory("IRS").then((res) => setUser(res));
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  // setSubmitting(true);
  console.log(user);
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // data={posts}
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
            title="No posts Found"
            subtitle="No posts found for this profile"
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
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            {/* <InfoBox
              title={posts.length || 0}
              subtitle="Posts"
              titleStyles="text-xl"
              containerStyles="mt-2"
            /> */}
            <CustomButton
              title="cat"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
