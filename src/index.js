import "bulma/css/bulma.css";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App.js";

render(<App />, document.querySelector("#content"));
render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.querySelector("#content")
);