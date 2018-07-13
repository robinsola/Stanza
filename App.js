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

class PoemSearch extends Component<{}> {
  render() {
    return <Text style={styles.containerSearch}>Find Poems</Text>;
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Stanza',
          component: PoemSearch,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  containerSearch: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  },
});
