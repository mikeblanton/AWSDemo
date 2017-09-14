import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, ListView, Text, View, Picker } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

export default class AWSDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {language: "java"};
  }

  render() {

    // iPhone/Android
DocumentPicker.show({
      filetype: [DocumentPickerUtil.images()],
    },(error,res) => {
      // Android
      console.log(
         res.uri,
         res.type, // mime type
         res.fileName,
         res.fileSize
      );
    });
    return null;
  }
}
AppRegistry.registerComponent('AWSDemo', () => AWSDemo);
