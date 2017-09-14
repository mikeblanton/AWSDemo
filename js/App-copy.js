import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ListView, Text, View, Picker } from 'react-native';

export default class AWSDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {language: "java"};
  }

  render() {

    var AWS = require('aws-sdk/dist/aws-sdk-react-native');

    var appId = '1628770240751597';
    var roleArn = 'arn:aws:iam::351557345457:role/BlantonAWSDemoRole';
    var bucketName = 'blanton.awsdemo';
    AWS.config.region = 'us-west-1';

    var fbUserId;
    var bucket = new AWS.S3({
        params: {
            Bucket: bucketName
        }
    });

    return (
      <View style={{flex: 1, paddingTop: 20, paddingLeft: 10, paddingRight: 10}}>
        <Text>Hello!</Text>
        <Picker
  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    );
  }
}
AppRegistry.registerComponent('AWSDemo', () => AWSDemo);
