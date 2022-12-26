import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Colors from '../styles/colors';

import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from '../styles/dimension';

const DrawerContainer = ({ navigation }) => {

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white,
        borderRadius: fixedWidth * 0,
        borderWidth: 0,
        borderColor: Colors.white,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ width: '100%', height: '100%' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('home');
          }}
          style={styles.menu}>
          <Text
            
            ellipsizeMode="tail"
            style={styles.menuText}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cloud-vision');
          }}
          style={styles.menu}>
          <Text
            
            ellipsizeMode="tail"
            style={styles.menuText}>
            Translate Photo
          </Text>
        </TouchableOpacity>
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    navigation.navigate('ButtonCards');*/}
        {/*  }}*/}
        {/*  style={styles.menu}>*/}
        {/*  <Text*/}
        {/*    */}
        {/*    ellipsizeMode="tail"*/}
        {/*    style={styles.menuText}>*/}
        {/*    Button Cards (7)*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    navigation.navigate('MusicCards');*/}
        {/*  }}*/}
        {/*  style={styles.menu}>*/}
        {/*  <Text*/}
        {/*    */}
        {/*    ellipsizeMode="tail"*/}
        {/*    style={styles.menuText}>*/}
        {/*    Music Cards (2)*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    navigation.navigate('ProductCards');*/}
        {/*  }}*/}
        {/*  style={styles.menu}>*/}
        {/*  <Text*/}
        {/*    */}
        {/*    ellipsizeMode="tail"*/}
        {/*    style={styles.menuText}>*/}
        {/*    Product Cards (25)*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    navigation.navigate('PriceCards');*/}
        {/*  }}*/}
        {/*  style={styles.menu}>*/}
        {/*  <Text*/}
        {/*    */}
        {/*    ellipsizeMode="tail"*/}
        {/*    style={styles.menuText}>*/}
        {/*    Price Cards (2)*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
      </ScrollView>
    </View>
  );
};
export default DrawerContainer;
const styles = StyleSheet.create({
  menu: {
    width: '100%',
    paddingVertical: fixedWidth * 15,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuText: {
    width: '100%',
    textTransform: 'none',
    fontSize: ScreenWidth * 0.042,
    color: Colors.primary,
    fontWeight: '500',
    paddingHorizontal: 30,
    textAlign: 'left',
    textAlignVertical: 'center',
  }
});
