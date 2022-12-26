

import * as React from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

import Icon from "../icons/Icon";

import { fixedHeight, fixedWidth, STATUSBAR_HEIGHT, ScreenHeight, ScreenWidth } from '../styles/dimension';
import Colors from '../styles/colors';



function Navbar(props) {

  const { route, navigation } = props;
  const navOption = props?.options?.navOption || 'menu';
  const ScreenName = props?.options?.title || route?.name || '';

  return (

    <View style={{ width: "100%", paddingTop: fixedWidth * 20, paddingBottom: fixedWidth * 20, elevation: 2, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, backgroundColor: Colors.white, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
      <View style={{ width: "20%", borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
        <TouchableOpacity onPress={() => { navigation?.toggleDrawer() }} style={{ width: fixedWidth * 32, height: fixedWidth * 32, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
          <Icon
            size={fixedWidth * 25} underlayColor='transparent' color={Colors.primary} name='bars' type='font-awesome-5' containerStyle={{}} /></TouchableOpacity>
      </View>
      <View style={{ width: "60%", borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
        <Text numberOfLines={1} ellipsizeMode='tail' style={{ width: "100%", textTransform: 'none', fontSize: ScreenWidth * 0.05, color: Colors.primary, fontWeight: '700', textAlign: 'center', textAlignVertical: 'center', }} >{ScreenName}</Text>
      </View>
      <View style={{ width: "20%", borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
      </View>
    </View>


  );
} export default Navbar;
