// Testing library https://testing-library.com/docs/react-testing-library/example-intro
// Test runner https://vitest.dev/
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest';
import App from './App'


test('loads and displays greeting', async () => {
  // Render a React element into the DOM
  render(<App />)

  // get elements
  const heading = await screen.findByTestId('heading')

  // assert that they work correctly
  expect(heading.innerHTML).toEqual('Hello F24-Berlin-Web-Circle')
})
