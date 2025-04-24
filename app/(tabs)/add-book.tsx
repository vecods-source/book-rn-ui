import {
  View,
  Text,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/global-style";
import COLORS from "@/constants/colors";
import Card from "@/components/card";
import InputField from "@/components/inputField";
import Btn from "@/components/button";
const AddBook = () => {
  const [bookTit, setBookTit] = useState("");
  const [rating, setRating] = useState(0);
  const [caption, setCaption] = useState("");
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View style={styles.Container}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                color: COLORS.textPrimary,
                fontSize: 30,
              }}
            >
              Add Book Reconmendation
            </Text>
            <Text style={{ color: COLORS.textSecondary }}>
              share your favourite reads with others
            </Text>
          </View>
          <View style={styles.Card}>
            <InputField
              title="Book Title"
              usrValue={bookTit}
              usrOnChange={setBookTit}
              usrplaceholder="Enter book title"
              icon="book-outline"
              isPass={false}
              showPass={true}
            />
            <InputField
              title="Rating"
              usrValue={bookTit}
              usrOnChange={setBookTit}
              usrplaceholder=""
              icon="star"
              isPass={false}
              showPass={true}
              rating={true}
              ratingNum={rating}
              setRating={setRating}
            />
            <InputField
              title="caption"
              usrValue={caption}
              usrOnChange={setCaption}
              usrplaceholder="descripe the book"
              icon="book"
              isPass={false}
              showPass={true}
              rating={false}
              ratingNum={rating}
              setRating={setRating}
              caption={true}
            />
            <Btn
              title={"Post Recomendation"}
              handlePress={() => {
                console.log("pressed");
              }}
              isLoading={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddBook;
