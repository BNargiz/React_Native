// src/App.js
import React, { useRef } from "react";

import {
  Text,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import GameScreen from "./screens/Gamescreen";

function MyHeader() {
  const [text, onChangeText] = React.useState("test");
  return (
    <>
      <GameScreen />
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <Button onPress={() => Alert.alert(text)} title="Press me" />
      <ActivityIndicator
        size="large"
        color="#c1262c"
        style={{ marginBottom: 30 }}
      />
    </>
  );
}

function MyFooter() {
  return (
    <>
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          padding: 20,
          marginBottom: 30,
        }}
      >
        <Text>Hello again!</Text>
      </View>
      <Button
        onPress={() => Alert.alert("Learning RN is so easy")}
        title="Learn More"
        color="#c1262c"
      />
    </>
  );
}

export default function App() {
  const randomNum = useRef(Math.random()).current;

  return (
    <View>
      <FlatList
        ListHeaderComponent={MyHeader}
        data={[0, 1, 2, 3, 4]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
            >
              <Image
                source={{
                  uri: `https://picsum.photos/500/300?random=${
                    randomNum + item
                  }`,
                }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => String(item)}
        ListFooterComponent={MyFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
