import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

export default class Home extends Component {

  state = {
    accessToken: null,
    instanceUrl: null,
  }

  async componentDidMount() {
    this.setState({
      instanceUrl: await AsyncStorage.getItem('@df17:instanceUrl'),
      accessToken: await AsyncStorage.getItem('@df17:accessToken'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginBottom: 30 }}>Logged in!</Text>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Instance URL</Text>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>{this.state.instanceUrl}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Access token</Text>
          <Text style={{ fontSize: 18 }}>{this.state.accessToken}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
