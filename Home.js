import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListItem,
  PixelRatio,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import * as actions from "./redux/actions";

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const { initialized, repositories } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Github repos</Text>
          <Text style={[styles.headerText, styles.alignRight]}>rowinf</Text>
        </View>
        {initialized && (
          <FlatList
            keyExtractor={item => item.id}
            data={repositories}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    justifyContent: "flex-start",
    width: "100%"
  },
  header: {
    height: 80 * PixelRatio.get(),
    padding: 10 * PixelRatio.get(),
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  headerText: {
    fontSize: 16,
    flex: 1
  },
  alignRight: {
    textAlign: "right"
  },
  listItem: {
    backgroundColor: "#f5f5f5",
    borderBottomColor: "#47315a",
    borderBottomWidth: PixelRatio.get() / 2,
    padding: 10 * PixelRatio.get(),
    opacity: 0.9
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

Home.propTypes = {
  init: PropTypes.func.isRequired,
  repositories: PropTypes.array
};

const mapStateToProps = state => ({
  initialized: state.initialized,
  repositories: state.repositories
});

const mapDispatchToProps = {
  init: actions.initialize
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
