import createAuth0Client from '@auth0/auth0-spa-js';
import { Auth0Client } from '@auth0/auth0-spa-js';

createAuth0Client({
  domain: 'dev-x16yrk-w.us.auth0.com',
  client_id: 'Qp4YxC5hfMzJu9tqBeBpvTxDfVFPwKEh'
}).then(auth0 => {
  // ...
});

const auth0 = new Auth0Client({
  domain: 'dev-x16yrk-w.us.auth0.com',
  client_id: 'Qp4YxC5hfMzJu9tqBeBpvTxDfVFPwKEh'
});
