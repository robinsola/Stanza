'use strict';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

const Logo = () => (

  <View style={styles.body}>
    <Text style={styles.text}>Stanza - Poetry Finder</Text>
    <Button color='#F5A623' title='Find Poems'/>
  </View>

);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a3a3a',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Logo;
