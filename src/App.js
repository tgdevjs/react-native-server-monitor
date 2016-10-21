import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import StatusScreen from './components/StatusScreen';

const isUp = true;

class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <StatusScreen  isUp={isUp}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
