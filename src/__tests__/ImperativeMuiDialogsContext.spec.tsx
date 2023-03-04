import React, { useState } from 'react'
import { ImperativeMuiDialogsContextProvider, useAlert, useConfirm } from '../ImperativeMuiDialogsContext'
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Button } from '@mui/material'

test('It should alert', async () => {
  const txt = 'Hello world!'
  const btnText = 'Alright'

  function Test() {
    const alert = useAlert()
    return <button onClick={() => alert(txt)}>Show alert dialog</button>
  }

  render(<ImperativeMuiDialogsContextProvider alert={{ btnText }}><Test /></ImperativeMuiDialogsContextProvider>)

  expect(screen.queryByText(txt)).not.toBeInTheDocument()

  const showBtn = screen.getByRole('button')
  fireEvent.click(showBtn)

  expect(screen.getByText(txt)).toBeInTheDocument()

  const okBtn = screen.getByText(btnText)
  expect(okBtn).toBeInTheDocument()
  fireEvent.click(okBtn)

  await waitForElementToBeRemoved(screen.queryByText(txt))
  expect(screen.queryByText(txt)).not.toBeInTheDocument()

})

test('It should confrim', async () => {
  const question = 'Are you ready?'
  const okBtnText = 'Yes'
  const cancelBtnText = 'No'
  const positiveAnswer = 'Sure!'
  const negativeAnswer = 'Not yet!'

  function Test() {
    const [answer, setAnswer] = useState('')
    const prompt = useConfirm()
    async function onClickHandler() {
      if (await prompt(question))
        setAnswer(positiveAnswer)
      else
        setAnswer(negativeAnswer)
    }
    return <>
      <Button onClick={() => onClickHandler()}>Show prompt dialog</Button>
      <p data-testid="result">{ answer }</p>
    </>
  }

  render(<ImperativeMuiDialogsContextProvider confirm={{ okBtnText, cancelBtnText }}><Test /></ImperativeMuiDialogsContextProvider>)

  expect(screen.queryByText(question)).not.toBeInTheDocument()
  const showBtn = screen.getByRole('button')
  fireEvent.click(showBtn)

  expect(screen.getByText(question)).toBeInTheDocument()

  const okBtn = screen.getByText(okBtnText)
  expect(okBtn).toBeInTheDocument()
  fireEvent.click(okBtn)

  await waitForElementToBeRemoved(screen.queryByText(question))
  expect(screen.queryByText(question)).not.toBeInTheDocument()
  expect(screen.getByText(positiveAnswer)).toBeInTheDocument()

  fireEvent.click(showBtn)
  const cancelBtn = screen.getByText(cancelBtnText)
  expect(cancelBtn).toBeInTheDocument()
  fireEvent.click(cancelBtn)
  await waitForElementToBeRemoved(screen.queryByText(question))
  expect(screen.getByText(negativeAnswer)).toBeInTheDocument()
})