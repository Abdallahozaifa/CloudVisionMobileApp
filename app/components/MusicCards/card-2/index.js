import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, ImageBackground, TextInput, Dimensions } from 'react-native'
import { fixedHeight, fixedWidth, STATUSBAR_HEIGHT, ScreenHeight, ScreenWidth } from '../../../styles/dimension';
import Colors from '../../../styles/colors';
import Icon from '../../../icons/Icon';

class Card2 extends Component {
  render() {
    return (
      <View style={{ width: "100%", paddingTop: fixedWidth * 25, paddingBottom: fixedWidth * 25, paddingLeft: fixedWidth * 25, paddingRight: fixedWidth * 25, elevation: 5, shadowOffset: { width: 0, height: 2.5 }, shadowOpacity: 0.2, backgroundColor: Colors.primary, borderRadius: fixedWidth * 20, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
        <View style={{ width: "100%", marginBottom: fixedWidth * 10, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >
          <TouchableOpacity onPress={() => { }} style={{ width: fixedWidth * 30, height: fixedWidth * 30, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
            <Icon
              size={fixedWidth * 28} underlayColor='transparent' color={Colors.white} name='bars' type='font-awesome-5' containerStyle={{}} /></TouchableOpacity>
        </View>
        <View style={{ width: "100%", borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
          <Image
            resizeMode={'cover'} source={require('../../../../assets/dummy.png')} style={{ width: fixedWidth * 200, height: fixedWidth * 200, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, }} />
          <View style={{ width: "100%", borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
            <Text numberOfLines={1} ellipsizeMode='tail' style={{ width: "100%", textTransform: 'none', fontSize: ScreenWidth * 0.0714, marginTop: fixedWidth * 5, marginBottom: fixedWidth * 5, color: Colors.white, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', lineHeight: 30, }} >Runaway</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={{ width: "100%", textTransform: 'none', fontSize: ScreenWidth * 0.0476, marginTop: fixedWidth * 10, color: Colors.accent, fontWeight: '500', textAlign: 'center', textAlignVertical: 'center', lineHeight: 18, }} >Smalltown Boy, Shane D</Text>
          </View>
        </View>
        <View style={{ width: "100%", borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
          <View style={{ width: "100%", marginTop: fixedWidth * 26, marginBottom: fixedWidth * 26, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
            <View style={{ borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >
              <Text style={{ textTransform: 'none', fontSize: ScreenWidth * 0.0357, color: Colors.white, fontWeight: 'normal', textAlign: 'left', textAlignVertical: 'center', }} >03:34</Text>
            </View>
            <View style={{ width: "70%", height: fixedWidth * 6, backgroundColor: Colors.black, borderRadius: fixedWidth * 8, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >
              <View style={{ width: "54%", height: "100%", backgroundColor: Colors.white, borderRadius: fixedWidth * 3, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
              </View>
            </View>
            <View style={{ borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }} >
              <Text style={{ textTransform: 'none', fontSize: ScreenWidth * 0.0357, color: Colors.white, fontWeight: 'normal', textAlign: 'right', textAlignVertical: 'center', }} >02:04</Text>
            </View>
          </View>
          <View style={{ width: "100%", paddingLeft: fixedWidth * 20, paddingRight: fixedWidth * 20, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
            <TouchableOpacity onPress={() => { }} style={{ width: fixedWidth * 26, height: fixedWidth * 26, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
              <Icon size={fixedWidth * 23} underlayColor='transparent' color={Colors.white} name='repeat' type='feather' containerStyle={{}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={{ width: fixedWidth * 30, height: fixedWidth * 26, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
              <Icon size={fixedWidth * 23} underlayColor='transparent' color={Colors.white} name='backward' type='font-awesome' containerStyle={{}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={{ width: fixedWidth * 60, height: fixedWidth * 60, backgroundColor: Colors.accent, borderRadius: fixedWidth * 50, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
              <Icon size={fixedWidth * 23} underlayColor='transparent' color={Colors.black} name='play' type='font-awesome' containerStyle={{}} /></TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={{ width: fixedWidth * 30, height: fixedWidth * 26, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
              <Icon size={fixedWidth * 23} underlayColor='transparent' color={Colors.white} name='forward' type='font-awesome' containerStyle={{}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={{ width: fixedWidth * 25, height: fixedWidth * 26, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
            <Icon size={fixedWidth * 23} underlayColor='transparent' color={Colors.white} name='shuffle' type='feather' containerStyle={{}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Card2;