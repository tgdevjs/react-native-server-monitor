import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StatusScreen from './components/StatusScreen';
import TabBarContainer from './components/TabBarContainer';

const isUp = true;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
			selectedService: 'web',
			services: [
				{ key: 'web', isUp: true, lastUpTime: null },
				{ key: 'db', isUp: false, lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000) },
				{ key: 'mail', isUp: true, lastUpTime: null },
			],
		}

		this._switchService = this._switchService.bind(this)
  }

  _switchService(nextService) {
		this.setState({ selectedService: nextService })
	}

  _renderTab(selected, services) {
    const thisService = services.find(s => s.key === selected )
    return (
      <StatusScreen
        isUp={thisService.isUp}
        lastUpTime={ thisService.lastUpTime }
      />
    )
  }

  render() {
    const { selectedService, services } = this.state;
    return (
      <LinearGradient colors={['#313d43', '#4a787a']} style={styles.container} >
        {this._renderTab(selectedService, services)}
        <TabBarContainer
          onTabChange={this._switchService}
          selectedService={ selectedService }
        />
      </LinearGradient>
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
