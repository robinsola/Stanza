'use strict';
import React, {Component} from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import Logo from './Logo';

export default class App extends Component<{}> {
  render() {
    return (
        <Logo />
        // <NavigatorIOS
        //   style={styles.container}
        //   initialRoute={{
        //     title: 'Stanza',
        //     component: Logo,
        //   }}/>
    );
  }
}
