import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TextUtils app', () => {
  render(<App />);
  const headingElement = screen.getByText(/Enter Your Text To Analyse it/i);
  expect(headingElement).toBeInTheDocument();
});
