import React, { Component } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

export default class App extends Component {
  state = { clickCount: 0 }

  render () {
    const { clickCount } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Guitar Trainer</Text>
        <Text style={styles.instructions}>Please select a training option below</Text>
        <Text style={styles.instructions}>Button has been pressed {clickCount} times</Text>
        <Button title='Note Teacher' onPress={() => this.setState({ clickCount: clickCount + 1 })} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10
  }
})
