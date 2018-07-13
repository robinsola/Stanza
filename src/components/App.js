/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, NavigatorIOS} from 'react-native';
import PoemSearch from './PoemSearch';

type Props = {};

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
  container: {
    flex: 1,
  },
});
