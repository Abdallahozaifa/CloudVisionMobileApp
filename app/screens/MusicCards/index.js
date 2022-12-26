import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, ImageBackground, TextInput, Dimensions } from 'react-native';
import Icon from '../../icons/Icon';
import Colors from '../../styles/colors';
import { fixedHeight, fixedWidth, STATUSBAR_HEIGHT, ScreenHeight, ScreenWidth } from '../../styles/dimension';
import Card1 from '../../components/MusicCards/card-1'
import Card2 from '../../components/MusicCards/card-2'
import CameraCard from "../../components/CameraCard";

export default class MusicCards extends Component {

  state = {};

  render() {

    const navigation = this.props.navigation;

    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: Colors.white, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
        <ScrollView
          horizontal={false} showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{ width: "100%", height: "100%", backgroundColor: Colors.background, }} >
          <View style={{ width: "100%", paddingTop: fixedWidth * 15, paddingBottom: fixedWidth * 30, paddingLeft: fixedWidth * 15, paddingRight: fixedWidth * 15, backgroundColor: Colors.background, borderRadius: fixedWidth * 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
            {/*<View style={{ width: "100%", height: fixedWidth * 35, marginBottom: fixedWidth * 10, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >*/}
            {/*  <Text numberOfLines={1} ellipsizeMode='tail' style={{ width: "100%", textTransform: 'none', fontSize: ScreenWidth * 0.04284, color: Colors.black, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', }} >Camera</Text>*/}
            {/*</View>*/}
            <CameraCard />
            {/*<Card1 />*/}
          </View>

          {/*<View style={{ width: "100%", paddingTop: fixedWidth * 15, paddingBottom: fixedWidth * 30, paddingLeft: fixedWidth * 15, paddingRight: fixedWidth * 15, backgroundColor: Colors.background, borderRadius: fixedWidth * 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >*/}
          {/*  <View style={{ width: "100%", height: fixedWidth * 35, marginBottom: fixedWidth * 10, borderRadius: fixedWidth * 0, borderWidth: 0, borderColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >*/}
          {/*    <Text numberOfLines={1} ellipsizeMode='tail' style={{ width: "100%", textTransform: 'none', fontSize: ScreenWidth * 0.04284, color: Colors.black, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', }} >Card - 2</Text>*/}
          {/*  </View>*/}
          {/*  <Card2 />*/}
          {/*</View>*/}
        </ScrollView>
      </View>
    )
  }
}

