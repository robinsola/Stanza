/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NavigatorIOS} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Text style={styles.container}>Find Poems</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
