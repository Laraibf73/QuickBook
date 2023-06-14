import {View} from 'react-native';
import styles from './style/styles';
import DrawerNavigation from './navigation/DrawerNavigation';
import React from 'react';

const App = () => {
  return (
    <View style={styles.body}>
      <DrawerNavigation />
    </View>
  );
};

export default App;
