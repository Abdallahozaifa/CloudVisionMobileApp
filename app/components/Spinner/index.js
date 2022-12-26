
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class CustomSpinner extends Component{
    state = {
        spinner: false
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                spinner: !this.state.spinner
            });
        }, 3000);
    }

    render() {
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <Spinner
                    // visible={this.state.spinner}
                    size={"large"}
                    visible={true}
                    textContent={text}
                    textStyle={styles.spinnerTextStyle}
                    animation={"slide"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF',
        fontSize: 28,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    // welcome: {
    //     fontSize: 30,
    //     textAlign: 'center',
    //     margin: 20
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5
    // }
});