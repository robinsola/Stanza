'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image, } from 'react-native';

export default class PoemSearch extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pick the Occasion:</Text>
        <Text style={styles.text}>Search Form Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  text: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
});