import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';

import TabBarItem from './TabBarItem';

const TabBarContainer = (props) => (
  <Tabs style={styles.tabContainer}>
    <TabBarItem icon="server"  name="web" label="Web" />
    <TabBarItem icon="database" name="db" label="DB" />
    <TabBarItem icon="envelope-o" name="mail" label="Mail" />
  </Tabs>
);

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 96,
  },
});

export default TabBarContainer;
