import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <div className='min-w-full min-h-screen bg-gray-200 dark:bg-dark-gradient dark:text-textPrimary 
            transition duration-500 ease-in-out'>
        <App />
        <Toaster position='top-right' />
      </div>

    </Provider>
  </StrictMode>,
)
