import { View } from 'react-native'
import React, { Component } from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './Screens/MainRoute'


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <NativeBaseProvider>
            <MainRoute />
        </NativeBaseProvider>
      </NavigationContainer>
    )
  }
}

export default App