import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './DrawerNavigator';

const AppContainer = () => {

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
};

export default AppContainer;
