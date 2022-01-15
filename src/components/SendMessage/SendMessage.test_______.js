import React from 'react';
import {render} from '@testing-library/react';
import SendMessage, { testowanieFunkcji } from './SendMessage';
import '@testing-library/jest-dom'
//import SendMessage, { testowanieFunkcji } from './SendMessage';


test("renders component", async() => {
  
  //const { getByText } = render(<SendMessage/>);

  let searchText = "Email:";


  //expect(getByText(searchText)).toBeInTheDocument();
  expect(testowanieFunkcji()).toContain("hello");   
})
/*

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it('Checking sending messages.', () => {
  const component = render(
    <SendMessage/>,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});*/