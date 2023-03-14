import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { App } from './App.stories'; //👈 Our stories imported here.

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

it('Check that the button initially displays click me', () => {
  const { getByTestId, getByText } = render(<App {...App.args} />);
   
  const clickme = getByTestId(`click-me`)
  expect(clickme.innerHTML).toBe("click me")
});

it('Checks that the button changes text to thanks after click', () => {
  const { getByTestId, getByText } = render(<InvalidForm {...InvalidForm.args} />);

  fireEvent.click(getByText('click me'));

  const thanks = getByTestId(`thanks`)
  expect(thanks.innerHTML).toBe("thanks")
});
