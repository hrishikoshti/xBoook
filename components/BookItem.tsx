import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useMyBooks } from "../context/MyBooksProvider";
import Colors from "../constants/Colors";

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  const { isBookSaved, onToggleSaved } = useMyBooks();

  const saved = isBookSaved(book);

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.description}>{book.description}</Text>
        <Text style={styles.title}>By {book.authors?.join(", ")}</Text>

        <Pressable
          style={[styles.button, saved ? { backgroundColor: "lightgray" } : {}]}
          onPress={() => onToggleSaved(book)}
        >
          <Text style={styles.buttonText}>
            {saved ? "Remove" : "Want to Read"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {
    flex: 1,
    aspectRatio: 2 / 3,
    marginRight: 10,
  },
  contentContainer: {
    flex: 4,
    borderColor: "lightgray",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    padding: 5,
    fontWeight: "500",
  },
  description: {
    fontSize: 10,
    padding: 5,
    fontWeight: "100",
  },
  button: {
    backgroundColor: Colors.light.tint,
    alignSelf: "flex-start",
    marginTop: "auto",
    marginVertical: 15,
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});

export default BookItem;
