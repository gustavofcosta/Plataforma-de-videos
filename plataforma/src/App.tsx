import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";

import Router from "./Router";
import { UserToggleMenuProvider } from "./contexts/ToggleMenuContext";

function App() {
  return (
    <ApolloProvider client={client}>
      <UserToggleMenuProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserToggleMenuProvider>
    </ApolloProvider>
  );
}

export default App;
