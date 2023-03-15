import { render, screen, fireEvent } from '@testing-library/react';
// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
import * as stories from './App.stories'; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary } = composeStories(stories);
//composeStories will process all stories from the component you specify, 
//compose args/decorators in all of them and return an object containing the composed stories


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

