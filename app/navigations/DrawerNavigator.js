import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from './Drawer';
import Navbar from './Navbar';

// import PostCards from '_screens/PostCards';
// import ProfileCards from '_screens/ProfileCards';
// import ButtonCards from '_screens/ButtonCards';
import MusicCards from '../screens/MusicCards';
// import ProductCards from '_screens/ProductCards';
// import PriceCards from '_screens/PriceCards';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContainer {...props} />}
      initialRouteName="PostCards"
      backBehavior={'history'}
      screenOptions={{
        overlayColor: 'transparent',
        drawerStatusBarAnimation: 'fade',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="home"
        component={MusicCards}
        options={{
          headerShown: true,
          title: 'Cloud Vision',
          header: props => <Navbar {...props} />,
        }}
      />
      <Drawer.Screen
        name="cloud-vision"
        component={MusicCards}
        options={{
          headerShown: true,
          title: 'Cloud Vision',
          header: props => <Navbar {...props} />,
        }}
      />
      {/*<Drawer.Screen*/}
      {/*  name="ButtonCards"*/}
      {/*  component={MusicCards}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    title: 'Button Cards',*/}
      {/*    header: props => <Navbar {...props} />,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Drawer.Screen*/}
      {/*  name="MusicCards"*/}
      {/*  component={MusicCards}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    title: 'Music Cards',*/}
      {/*    header: props => <Navbar {...props} />,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Drawer.Screen*/}
      {/*  name="ProductCards"*/}
      {/*  component={MusicCards}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    title: 'Product Cards',*/}
      {/*    header: props => <Navbar {...props} />,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Drawer.Screen*/}
      {/*  name="PriceCards"*/}
      {/*  component={MusicCards}*/}
      {/*  options={{*/}
      {/*    headerShown: true,*/}
      {/*    title: 'Price Cards',*/}
      {/*    header: props => <Navbar {...props} />,*/}
      {/*  }}*/}
      {/*/>*/}
    </Drawer.Navigator>
  );
}
export default AppNavigator;
