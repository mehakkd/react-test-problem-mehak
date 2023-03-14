import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { App } from './App.stories'; //👈 Our stories imported here.

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

it('Check that the button initially displays click me', () => {
  //const { getByTestId, getByText } = render(<App {...App.args} />);
   
  const clickme = screen.getByLabelText("click me")
  expect(clickme.innerHTML).toBe("click me")
});

it('Checks that the button changes text to thanks after click', () => {
  //const { getByTestId, getByText } = render(<App {...App.args} />);

  fireEvent.click(screen.getByLabelText("click me"));

  const thanks = screen.getByLabelText("thanks")
  expect(thanks.innerHTML).toBe("thanks")
});
