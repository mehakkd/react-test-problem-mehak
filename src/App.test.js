import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { App } from './App.stories'; //👈 Our stories imported here.

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

const Button = () => {
  return <button type= "button" onClick= {this.handleClick}>
          {this.state.active ? "click me" : "thanks"}
        </button>
};

// The button node can be extracted via its text content with screen.getByText()
test('Extract button node with getByText', () => {
  render(<Button/>);
  const button = screen.getByText('click me'); 
});

// The same button node can also be extracted with screen.getByRole()
test('Extract button node with getByRole', () => {
  render(<Button/>);
  const button = screen.getByRole('button'); 
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
