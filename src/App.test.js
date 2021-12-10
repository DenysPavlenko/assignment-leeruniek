import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders without errors', () => {
    render(<App />);
  });
});
