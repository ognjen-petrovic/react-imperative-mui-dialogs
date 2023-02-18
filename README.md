# react-imperative-mui-dialogs
Imperative React alert, confirm and prompt dialogs built with the MUI lib.

## Why?

When it comes to simple dialogs React's declarative way seems cumbersome, in order to avoid a component state management this lib provides dialog the functions that have same signature as native window alert, confirm and propmpt functions.

## How?

Wrap app in ImperativeMuiDialogsContextProvider:
```tsx
<ImperativeMuiDialogsContextProvider>
  <App />
</ImperativeMuiDialogsContextProvider>
```

... and then hook to dialogs:

```ts
const alert = useAlert()
const confirm = useConfirm()
const prompt = usePrompt()

alert('Hello world');
confirm('Confirm action?')
prompt('Please give me an answer?')
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


