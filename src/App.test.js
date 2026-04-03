// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockChainify title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockChainify/i);
    expect(titleElement).toBeInTheDocument();
});
