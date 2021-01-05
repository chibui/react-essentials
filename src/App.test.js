import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";

test('renders an h1', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Hello React Testing Library/);
  expect(h1).toHaveTextContent('Hello React Testing Library');
  // alternate without importing extend-expect.
  expect(h1.textContent).toBe('Hello React Testing Library');
});

test('also renders an h1', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Hello React Testing Library/);
  // alternate without importing extend-expect.
  expect(h1.textContent).toBe('Hello React Testing Library');
});