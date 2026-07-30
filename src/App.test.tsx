import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the profile name on the home page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Shivank Kapoor/i);
  expect(nameElement).toBeInTheDocument();
});
