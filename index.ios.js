/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  I18nManager,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

I18nManager.forceRTL(true);

export default class rtl_test_app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          أحب اللغة العربية without lineHeight
        </Text>
        <Text style={styles.instructions2}>
          أحب اللغة العربية with lineHeight
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    ...Platform.select({
      ios: {
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
    }),
  },
  instructions2: {
    color: '#333333',
    marginBottom: 5,
    lineHeight: 20,
    ...Platform.select({
      ios: {
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
    }),
  },
});

AppRegistry.registerComponent('rtl_test_app', () => rtl_test_app);
