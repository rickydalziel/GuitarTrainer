import ReactNative from 'react-native'
import React from 'react'
import App from '../App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  expect(renderer.create(<App />)).toMatchSnapshot()
})

it('increments a counter when the note teacher button is pressed', () => {
  const app = renderer.create(<App />).root
  const button = app.findByType(ReactNative.Button)

  button.props.onPress()

  const counter = app.findAllByType(ReactNative.Text)[2]
  expect(counter.props.children[1]).toBe(1)
})
