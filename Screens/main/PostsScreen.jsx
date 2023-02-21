import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import PostsList from "../../components/PostsList";
const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        {/* Аватар */}
        <Image
          source={require("../../assets/port.png")}
          style={styles.avatar}
        />

        <View style={styles.userInfo}>
          {/* Имя */}
          <Text style={styles.userInfoName}>Natali Romanova</Text>

          {/* Email */}
          <Text style={styles.userInfoEmail}>email@example.com</Text>
        </View>
      </View>
      <PostsList />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',

    paddingHorizontal: 16,

    backgroundColor: "#ffffff",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
    marginRight: "auto",
  },
  avatar: {
    borderRadius: 16,
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userInfoName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,

    color: "#212121",
  },
  userInfoEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "#21212180",
  },
});
