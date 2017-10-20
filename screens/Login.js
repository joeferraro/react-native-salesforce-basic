import React from 'react';
import { View, StyleSheet, WebView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const AUTHORIZATION_URL = 'https://df17-developer-edition.na73.force.com/customer/services/oauth2/authorize';
const RESPONSE_TYPE = 'token';
const CLIENT_ID = '3MVG9g9rbsTkKnAVVRYfb5S1U_QILTizwll6hre_VVhO8FzVHF1Z35drJm3m5igmkjaK99R4XPRnzaZtRbm6s';
const CALLBACK = encodeURIComponent('df17:///sfdc/auth/done');

const authUrl = `${AUTHORIZATION_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK}`;

export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: authUrl }}
          javaScriptEnabled
          startInLoadingState
        />
      </View>
    )
  }

}