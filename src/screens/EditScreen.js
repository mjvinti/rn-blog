import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput onChangeText={setTitle} value={title} />
      <Text>Edit content:</Text>
      <TextInput onChangeText={setContent} value={content} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
