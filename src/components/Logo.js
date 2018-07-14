'use strict';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, Dimensions } from 'react-native';

const Logo = () => (
  <View style={styles.body}>
    <Image source={require('../../resources/ink.png')}/>
    <Button color='#F5A623' title='Find Poems'/>
  </View>
);

const imageWidth = Dimensions.get('window').width/2;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a3a3a',
  },
});

export default Logo;
