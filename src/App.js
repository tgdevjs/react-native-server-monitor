import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import StatusScreen from './components/StatusScreen';

const isUp = true;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isUp: false,
      lastUpTime: new Date( (new Date()).getTime() - 5 * 60 * 1000),
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <StatusScreen  isUp={this.state.isUp} lastUpTime={ this.state.lastUpTime }/>
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
