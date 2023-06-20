import { render, screen } from '@testing-library/react';
import App from './App';
import NavigationBar from './components/NavBar/NavigationBar';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/News/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navbar', () => {
  render(<App />);
  
  const homeLink = screen.getByText(/Home/i);
  const cartLink = screen.getByText(/Cart/i);
  const productsLink = screen.getByText(/Products/i);
  expect(cartLink).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(productsLink).toBeInTheDocument();
})