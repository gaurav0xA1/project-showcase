import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio showcase with separate media sections', () => {
  render(<App />);

  expect(screen.getByText(/project showcase/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /video work/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /graphic design/i })).toBeInTheDocument();
});
