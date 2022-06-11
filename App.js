import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Splashscreen,Loginscreen,Homescreen } from './src/screens';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Homescreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})