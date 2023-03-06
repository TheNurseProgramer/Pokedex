import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider domain="dev-4cpoaw8schlk8mgl.us.auth0.com" clientId = "62HLpMsE7zuYug22KtolPMsHNqtNjYFn" authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  <App/>
  </Auth0Provider>
  </React.StrictMode>,
)
