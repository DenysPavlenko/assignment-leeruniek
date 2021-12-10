import { screen, render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders without errors', () => {
    render(<App />);
  });

  test('renders plan name', () => {
    render(<App />);
    const name = screen.getByRole('heading', { level: 2 });
    expect(name.textContent).not.toBe('');
  });

  test('renders plan author', () => {
    render(<App />);
    const name = screen.getByRole('heading', { level: 5 });
    expect(name.textContent).not.toBe('');
  });
});
