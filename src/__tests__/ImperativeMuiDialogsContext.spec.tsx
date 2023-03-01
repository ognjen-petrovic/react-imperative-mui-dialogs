import React from 'react'
import {ImperativeMuiDialogsContextProvider, useAlert} from '../ImperativeMuiDialogsContext'
import { render, fireEvent } from '@testing-library/react'

test('It should alert', () => {

  const txt = 'Hello world!'

  function Test() {
    const alert =  useAlert()
    return <button onClick={() => alert(txt)}>Show alert dialog</button>
  }

  const { getByRole, queryByText, getByText} = render(<ImperativeMuiDialogsContextProvider><Test /></ImperativeMuiDialogsContextProvider>)
  const btn = getByRole('button')
  expect(queryByText(txt)).not.toBeInTheDocument()
  fireEvent.click(btn)
  expect(getByText(txt)).toBeInTheDocument()
})