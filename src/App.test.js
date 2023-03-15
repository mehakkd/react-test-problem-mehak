import { render, screen, fireEvent } from '@testing-library/react';
import { Primary } from './App.stories';

it('Check that the button initially displays click me', () => {
  render (<Primary />)
  const clickme = screen.getByText("click me")
  expect(clickme).toBeInTheDocument()
});

it('Checks that the button changes text to thanks after click', () => {
  render (<Primary />)
  fireEvent.click(screen.getByText("click me"));
  const thanks = screen.getByText("thanks")
  expect(thanks).toBeInTheDocument()
});

