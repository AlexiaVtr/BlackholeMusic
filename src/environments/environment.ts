import { domain, clientId, logout_url, redirect_uri } from '../../auth_config.json';

export const environment = {
    production: false,
    auth: {
        domain,
        clientId,
      redirectUri: window.location.origin,
    },
};
