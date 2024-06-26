import { render, screen } from '@testing-library/react'
import ExampleComponent from './ExampleComponent'

test('renders the example component', () => {
  render(<ExampleComponent />)
  const element = screen.getByText(/hello, world/i)
  expect(element).toBeInTheDocument()
})
