/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View,
  Alert, Button,
  TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback,
  Slider, Image
} from 'react-native';

export default class Draw extends Component {
  
  _onPressButton(){
    Alert.alert('button pressed.');
  }
  _onPressColorPicker(){
    Alert.alert('color selected');
  }



  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.osStatus} ></View>
        <View style = {styles.header}>
          <View style = {styles.headerUp}>
            <View style = {styles.headerUpPart01}>
              <TouchableHighlight 
                onPress={this._onPressButton} 
                underlayColor="white">
                  <View style={styles.btnBack}/>
              </TouchableHighlight>
            </View>
            <View style = {styles.headerUpPart02}>
              <TouchableHighlight 
                onPress={this._onPressButton} 
                underlayColor="white">
                  <View style={styles.photo}> 
                    <Image source={require('./img/photo.png')}/>
                  </View>
              </TouchableHighlight>
            </View>
            <View style = {styles.headerUpPart03}>
              <TouchableHighlight 
                onPress={this._onPressButton} 
                underlayColor="white">
                  <View style={styles.btnDone}>
                    <Text style = {styles.done}> DONE </Text>
                  </View>
                  <View style = {styles.btnDoneShadow} />
              </TouchableHighlight>
            </View>
          </View>
          <View style = {styles.headerDn}>
            <View style={styles.headerDnPart01}>
            </View>
            <View style={styles.headerDnPart02}>
              <Slider/>
            </View>
            <View style={styles.headerDnPart03}>
              <Text style={styles.radius}>
                radius: 1
              </Text>
            </View>
          </View>
        </View>
        <View style = {styles.body}>
          <View style = {styles.canvas}></View>
        </View>
        <View style = {styles.footer}>
          <View style = {styles.footerUp}>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.colorPicker}/>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.colorPicker}/>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.colorPicker}/>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.colorPicker}/>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.colorPicker}/>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.colorPicker}/>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressColorPicker} 
              underlayColor="white">
                <View style={styles.btnAddColor}>
                  <Image source={require('./img/plus.png')}/>
                </View>
            </TouchableHighlight>
          </View>
          <View style = {styles.footerDn}>
            <TouchableHighlight 
              onPress={this._onPressButton} 
              underlayColor="#F43455">
                <View style={styles.button}>
                  <Image source={require('./img/pencil.png')}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressButton} 
              underlayColor="#F43455">
                <View style={styles.button}>
                  <Image source={require('./img/eraser.png')} />
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressButton} 
              underlayColor="#F43455">
                <View style={styles.button}>
                  <Image source={require('./img/finger.png')}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressButton} 
              underlayColor="#F43455">
                <View style={styles.button}>
                  <Image source={require('./img/revert.png')}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this._onPressButton} 
              underlayColor="#F43455">
                <View style={styles.button}>
                  <Image source={require('./img/trash.png')}/>
                </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  osStatus: {
    height: 31, backgroundColor: '#222',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
    header: {
      flex: 1, flexDirection: 'column',
      justifyContent: 'flex-start', alignItems: 'stretch',
    },
      headerUp:{
        flex: 2, flexDirection: 'row', justifyContent: 'space-between'
      },
        headerUpPart01:{
          flex:1, alignItems: 'flex-start'
        },
          btnBack:{
            backgroundColor: 'pink', 
            width: 50, height: 50, borderRadius: 25, marginLeft: 10,
          },
        headerUpPart02: {
          flex: 1, alignItems: 'center',
        },
          photo:{
            backgroundColor: 'grey', 
            width: 90, height: 90, transform : [{rotate : '-2deg'}]
          },
        headerUpPart03: {
          flex: 1, alignItems: 'flex-end',
        },
          btnDone:{
            backgroundColor: '#B90CDC', justifyContent: 'center', alignItems: 'center',
            width: 103, height: 58, transform : [{rotate: '3deg'}]
          },
          done:{
            fontFamily: 'helvetica neue', fontWeight: 'bold', fontSize: 25, color: '#00E9EE',
          },
          btnDoneShadow:{
            backgroundColor: '#B90CDC', justifyContent: 'center', alignItems: 'center',
            width: 103, height: 58,
          },
      headerDn: {
        flex: 1,flexDirection: 'row',
      },
        headerDnPart01: {
          flex: 1, 
        },
        headerDnPart02: {
          flex: 2.5, justifyContent: 'center',
        },
        headerDnPart03: {
          flex: 1, justifyContent: 'center', alignItems: 'flex-end',
          paddingRight: 10,
        },
          radius:{
            fontSize: 15, fontFamily: 'helvetica neue', fontWeight: 'bold', color: '#fff',
          },
    body: {
      flex: 2.5,
      padding:2,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
      canvas: {
        flex: 1,
        backgroundColor: '#fff',
      },

    footer:{
      flex: 0.95,
      justifyContent: 'flex-end',
      alignItems: 'stretch',
    },
      footerUp:{
        flex: 1, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
      },
        colorPicker:{
          backgroundColor: '#333', margin: 5,
          width: 40, height: 40, borderWidth: 2, borderRadius: 20, borderColor: '#5B5B5B',
        },
        btnAddColor:{
          margin: 5, width: 40, height: 40, justifyContent: 'center', alignItems: 'center',
          borderWidth: 2, borderRadius: 20, borderColor: '#fff', paddingRight: 1,
        },
      footerDn: {
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'flex-end',
      },
        button: {
          backgroundColor: '#5B5B5B',
          width: 72, height: 72,
          justifyContent: 'center', alignItems: 'center'
        },
});

AppRegistry.registerComponent('Draw', () => Draw);