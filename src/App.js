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

		this._switchService = this._switchService.bind(this);
    this._fetchServiceStatus = this._fetchServiceStatus.bind(this);
  }

  componentDidMount() {
    // setInterval( () => { console.log('Polling the Status API')}, 5000);
    setInterval( () => { this._fetchServiceStatus}, 5000);
  }

  _fetchServiceStatus() {
		fetch('http://localhost:8080/status')
			.then(response => response.json())
			.then(data => {
				const newState = this.state.services.map(s => (
					Object.assign(s, {
						isUp: data[s.key].status === 'up',
						lastUpTime: new Date(data[s.key].lastUpTime),
					})
				))

				this.setState({ services: newState })
			})
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
