import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from './app';

ReactDOM.createRoot(document.getElementById('page')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="ministeriokids.us.auth0.com"
      clientId="sBTTE0u5PVpU6UnxKYo3CtzvdOXC5KhG"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);