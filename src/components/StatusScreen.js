import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

import StatusIndicator from './StatusIndicator';

class StatusScreen extends Component {
  render() {
    const { isUp, lastUpTime } = this.props;
    let lastUpComponent
    if (!this.props.isUp) {
      const relativeTime = moment().to(lastUpTime)
      lastUpComponent = <Text style={styles.lastUpText}>Last up: {relativeTime}</Text>;
    }

    return (
      <View style={styles.container}>
        <StatusIndicator isUp={isUp} />
        <Text style={styles.statusText}>
          Service {isUp ? 'Up' : 'Down!'}
        </Text>
        {lastUpComponent}
      </View>
    )
  }
}

StatusScreen.propTypes = {
  isUp: PropTypes.bool.isRequired,
  lastUpTime: PropTypes.instanceOf(Date),
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 60,
		textAlign: 'center',
		color: '#E6E8EF',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	lastUpText: {
		fontSize: 20,
		marginTop: 20,
		textAlign: 'center',
		color: '#b1b3b6',
		backgroundColor: 'rgba(0,0,0,0)',
	},
});

export default StatusScreen;
