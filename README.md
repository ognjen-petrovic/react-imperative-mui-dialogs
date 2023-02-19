# react-imperative-mui-dialogs
Imperative React alert, confirm and prompt dialogs built with the MUI lib.

See the [example page](https://ognjen-petrovic.github.io/react-imperative-mui-dialogs/example/dist/index.html)

## Why?

When it comes to simple dialogs React's declarative way seems cumbersome, in order to avoid a component state management this lib provides the dialog functions that have same signature as native window alert, confirm and propmpt functions.

## How?

Install package:

```
npm i imperativemuidialogs
```

Wrap app in ImperativeMuiDialogsContextProvider:

```tsx
import { ImperativeMuiDialogsContextProvider } from 'imperativemuidialogs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImperativeMuiDialogsContextProvider>
      <App />
    </ImperativeMuiDialogsContextProvider>
  </React.StrictMode>,
)
```

... and then hook to dialogs:

```ts
import { useAlert, useConfirm, usePrompt } from 'imperativemuidialogs/dist/ImperativeMuiDialogsContext'

const alert = useAlert()
const confirm = useConfirm()
const prompt = usePrompt()

await alert('Hello world');

if (await confirm('Confirm action?') {
  //
}

const answer = await prompt('Please give me an answer?')
``` 

## Run the example locally:

```console
git clone git@github.com:ognjen-petrovic/react-imperative-mui-dialogs.git
cd react-imperative-mui-dialogs
npm install
cd example
npm install
cd ..
npm run start
```

Open the example at <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>


