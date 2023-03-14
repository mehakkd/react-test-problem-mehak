import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { App } from './App.stories'; //👈 Our stories imported here.

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

const Goodbye = () => {
  return <h1>Bye Everyone</h1>
};

test('should print the Goodbye component', () => {
  render(<Goodbye/>);
  screen.debug();
});

/*
it('Check that the button initially displays click me', () => {
  //const { getByTestId, getByText } = render(<App {...App.args} />);
   
  const clickme = screen.getByText("click me")
  expect(clickme).toBeInTheDocument()
});

it('Checks that the button changes text to thanks after click', () => {
  //const { getByTestId, getByText } = render(<App {...App.args} />);

  fireEvent.click(screen.getByText("click me"));

  expect(screen.getByText("thanks")).toBeInTheDocument()
});
*/
