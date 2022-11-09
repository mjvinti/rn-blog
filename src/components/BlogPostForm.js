import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogPostForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput onChangeText={setTitle} style={styles.input} value={title} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        onChangeText={setContent}
        style={styles.input}
        value={content}
      />
      <Button onPress={() => onSubmit(title, content)} title="Save Blog Post" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
