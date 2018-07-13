'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image, } from 'react-native';

export default class PoemSearch extends Component<{}> {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Pick the Occasion:</Text>
        <Text style={styles.text}>(Radio Button Search Form Here)</Text>
        <View style={styles.formStyle}>
          <TextInput style={styles.searchInput} placeholder='Search by Author'/>
          <Button onPress={() => {}} color='#F5A623' title='Find Poems'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  formStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#F5A623',
    borderRadius: 8,
    color: '#F5A623',
  },
});
