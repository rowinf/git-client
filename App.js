import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import store from "./redux/configureStore";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    paddingTop: 20
  }
});
