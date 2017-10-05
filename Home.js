import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import * as actions from "./redux/actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const { initialized } = this.props;
    return (
      <View>
        <Text>I am home</Text>
        {initialized && <Text>Boom</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.initialized
});

const mapDispatchToProps = {
  init: actions.initialize
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
