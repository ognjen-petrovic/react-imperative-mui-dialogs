import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ImperativeMuiDialogsContextProvider } from '../../dist'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
         <ImperativeMuiDialogsContextProvider alert={{btnText: 'sid'}}>
            <App />
         </ImperativeMuiDialogsContextProvider>
  </React.StrictMode>,
)
