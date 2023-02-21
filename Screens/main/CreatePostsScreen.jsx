import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";

const initialState = {
  name: "",
  place: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const nameInputHandler = (text) => {
    setState((prevState) => ({ ...prevState, name: text }));
  };

  const placeInputHandler = (text) => {
    setState((prevState) => ({ ...prevState, place: text }));
  };

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View
          style={{ ...styles.inner, marginBottom: showKeyboard ? -200 : 0 }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.pictureContainer}>
              {/* Кнопка сделать фото */}
              <TouchableOpacity
                // style={{ ...styles.cameraBtnContainer, backgroundColor: state.photo ? 'rgba(255, 255, 255, 0.3)' : '#FFFFFF' }}
                style={styles.snapBtn}
                activeOpacity={0.8}
              >
                <MaterialIcons
                  name="camera-alt"
                  size={24}
                  style={styles.snapIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Блок под превью/камерой */}

            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.uploadEditButton}>Загрузить фото</Text>
            </TouchableOpacity>

            <TextInput
              placeholder="Название..."
              placeholderTextColor="#BDBDBD"
              style={styles.inputDescription}
              value={state.name}
              onChangeText={nameInputHandler}
              // onFocus={() => setShowKeyboard(true)}
              // onBlur={() => setShowKeyboard(false)}
            />

            <View>
              <Feather
                name="map-pin"
                size={24}
                color={"#BDBDBD"}
                style={styles.iconLocality}
              />
              <TextInput
                placeholder="Местность..."
                placeholderTextColor="#BDBDBD"
                style={styles.inputLocality}
                value={state.place}
                onChangeText={placeInputHandler}
                // onFocus={() => setShowKeyboard(true)}
                // onBlur={() => setShowKeyboard(false)}
              />
            </View>

            <TouchableOpacity
              style={{
                ...styles.publishBtnContainer,
              }}
              activeOpacity={0.8}
            >
              <Text
                style={{
                  ...styles.publishBtnTxt,
                }}
              >
                Опубликовать
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.deleteBtnContainer}
            activeOpacity={0.8}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  isloading: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
  },

  pictureContainer: {
    flex: 1,

    maxHeight: 240,
    width: 343,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    overflow: "hidden",

    marginTop: 32,
    marginHorizontal: 16,
    marginLeft: "auto",
    marginRight: "auto",

    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    height: 240,
    width: 180, //'100%'
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
  },

  flipBtn: {
    position: "absolute",
    top: 5,
    right: 10,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ratioBtn: {
    position: "absolute",
    bottom: 5,
    left: 10,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  sizeIndicator: {
    position: "absolute",
    bottom: 5,
    right: 10,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  snapBtn: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 50,

    width: 60,
    height: 60,

    justifyContent: "center",
    alignItems: "center",
  },
  snapIcon: {
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowRadius: 4,
    // shadowOpacity: 0.25,
    color: "#bdbdbd",
    width: 24,
    height: 24,
  },

  preview: {
    flex: 1,
    maxHeight: 240,
    width: 320,
  },

  uploadEditButton: {
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",

    marginTop: 8,
    marginBottom: 32,
    marginHorizontal: 16,
  },
  inputDescription: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderColor: "#e8e8e8",
    borderBottomWidth: 1,

    height: 50,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  iconLocality: {
    position: "absolute",
    top: 13,
    left: 16,
  },
  inputLocality: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderColor: "#e8e8e8",
    borderBottomWidth: 1,

    paddingStart: 28,

    height: 50,
    marginBottom: 32,
    marginHorizontal: 16,
  },

  publishBtnTxt: {
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",

    // paddingHorizontal: 116,
    // paddingVertical: 16,
    // borderRadius: 100,
    // width: 343,
  },
  publishBtnContainer: {
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 32,
    paddingVertical: 16,

    // height: 51,
    marginHorizontal: 16,
    // marginTop: 16,
    marginBottom: 50,

    justifyContent: "center",
    alignItems: "center",
  },

  deleteBtnContainer: {
    borderRadius: 20,
    backgroundColor: "#F6F6F6",

    width: 70,
    height: 40,
    marginBottom: 25,

    alignSelf: "center",

    justifyContent: "center",
    alignItems: "center",
  },
  deleteBtnIcon: {
    width: 24,
    height: 24,
  },
});
