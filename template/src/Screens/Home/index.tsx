import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Icons } from '../../Assets';

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={Icons.logo} style={styles.logo} />
      <Text style={styles.headline}>OOZOU example home page works!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  headline: {
    marginVertical: 20,
    textAlign: 'center',
  },
  logo: { width: '100%', height: 170, resizeMode: 'contain' },
});

export default Home;
