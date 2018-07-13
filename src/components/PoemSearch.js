'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image, } from 'react-native';

//function to call api from house listing tutorial:
function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
}

export default class PoemSearch extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'author name',
      isLoading: false,
    };
  }

  _onSearchInput = (event) => {
    this.setState({ searchString: event.nativeEvent.text });
  };

  _executeQuery = (query) => {
    console.log(query);
    this.setState({ isLoading: true });
  };

  _onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  };

  render() {
    const loader = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Pick the Occasion:</Text>
        <Text style={styles.text}>(Radio Button Search Form Here)</Text>
        <View style={styles.formStyle}>
          <TextInput
            value={this.state.searchString}
            style={styles.searchInput}
            placeholder='Search by Author'
            onChange={this._onSearchInput}/>
          <Button onPress={this._onSearchPressed} color='#F5A623' title='Find Poems'/>
        </View>
        {loader}
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
