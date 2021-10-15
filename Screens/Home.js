import * as React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';

export default class Start extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleBar}>
          <View style={styles.titleBar1}>
            <Image
              style={styles.image1}
              source={require('../assets/headershroom.png')}
            />
          </View>
          <View style={styles.titleBar2}>
            <Text style={styles.titleBarText}>WILL THIS SHROOM KILL ME?</Text>
          </View>
        </View>
        <View style={styles.insideCont}>
          <Text style={styles.pageTitle}>
           So you decide to be an adventurer, roam the woods, and live off the land.
          </Text>

          <Image
            style={styles.image2}
            source={require('../assets/mushrooms.png')}
          />

          <Text style={styles.pageTitle}>
            And hey you gotta eat. But what exactly?
          </Text>

          <Pressable
            style={({ pressed }) =>
              pressed ? styles.buttonPressed : styles.button
            }
            onPress={() => this.props.goToPage('Visualization')}>
            <Text style={styles.titleBarText}>GET STARTED</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6BED1',
  },
  insideCont: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    backgroundColor: '#4B112C',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleBar1: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    height: '100%',
  },
  titleBar2: {
    flex: 1,
  },
  image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pageTitle: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B112C',
  },
  titleBarText: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'white',
    letterSpacing: 5,
  },
  image2: {
    width: '100%',
    height: '28%',
    resizeMode: 'contain',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4B112C',
    borderRadius: 30,
    padding: 5,
  },
  buttonPressed: {
    backgroundColor: 'grey',
    borderRadius: 30,
  },
});
