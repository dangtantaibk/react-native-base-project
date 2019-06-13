import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import {
  SafeAreaView,
  withNavigation,
} from "react-navigation";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

class ScreenAreaView extends Component {

  constructor(props) {
    super(props);

    this.didFocusSubscription = undefined;
  }

  componentDidMount(): void {
    StatusBar.setBarStyle(this.props.barStyle || "default", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }

    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      () => {
        StatusBar.setBarStyle(this.props.barStyle || "default", true);
      }
    );
  }

  componentWillUnmount(): void {
    if (this.didFocusSubscription) {
      this.didFocusSubscription.remove();
    }
  }

  render(): React.ReactElement<any> {
    return (
      <SafeAreaView
        forceInset={this.props.forceInset}
        style={[styles.screen, this.props.style]}
      >
        <StatusBar animated={true} />
        {this.props.children}
      </SafeAreaView>
    );
  }
}

export default withNavigation(ScreenAreaView);
