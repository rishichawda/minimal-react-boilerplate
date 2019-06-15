/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import App from 'App'

test('should render App', () => {
  const app = renderer.create(<App />)
  const domTree = app.toJSON()
  expect(domTree).toMatchSnapshot()
})
