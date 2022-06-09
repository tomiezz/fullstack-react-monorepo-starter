/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Welcome } from '@frms/shared';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.root}>
        <Welcome />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
