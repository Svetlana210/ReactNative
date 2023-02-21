import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const PostsList = () => {
  return (
    <View style={styles.listItem}>
      {/* Фото */}
      <Image source={require("../assets/nature.png")} style={styles.image} />

      {/* Описание */}
      <Text style={styles.description}>Лес</Text>

      <View style={styles.buttonsContainer}>
        {/* Кнопка Комментарии */}
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.commentsAndLikesBtn}>
            <Feather
              name="message-circle"
              size={22}
              style={{
                marginRight: 6,
                color: "#bdbdbd",
              }}
            />
            <Text style={styles.numberComments}>0</Text>
          </TouchableOpacity>

          {/* Кнопка Лайки */}
          <TouchableOpacity style={styles.commentsAndLikesBtn}>
            <Feather
              name="thumbs-up"
              size={22}
              style={{
                marginRight: 6,
                color: "#bdbdbd",
              }}
            />
            <Text style={styles.numberComments}>0</Text>
          </TouchableOpacity>
        </View>
        {/* Кнопка Геолокация */}
        <TouchableOpacity style={styles.locationBtn}>
          <Feather
            name="map-pin"
            size={22}
            color={"#BDBDBD"}
            style={{ marginRight: 4 }}
          />
          <Text style={styles.locationLink}>Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 375,

    // marginHorizontal: 10,
    marginBottom: 32,
  },
  image: {
    marginLeft: 16,
    borderRadius: 8,

    // width: '100%',
    height: 240,

    marginBottom: 8,
  },
  description: {
    marginLeft: 17,
    fontSize: 1,
    fontFamily: "Roboto-Medium",
    // alignSelf: "flex-start",
  },

  buttonsContainer: {
    marginTop: 5,
    marginHorizontal: 16,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnCont: {
    flexDirection: "row",
  },
  commentsAndLikesBtn: {
    marginRight: 27,
    alignItems: "flex-end",
    // maxWidth: "20%",

    flexDirection: "row",
  },
  numberComments: {
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },

  locationBtn: {
    maxWidth: "80%",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  locationLink: {
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",

    color: "#212121",
  },
});

export default PostsList;
