import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";

function App() {
  const { route, authStatus } = useAuthenticator((context) => [context.route]);
  Amplify.configure(amplifyconfig);
  const currentConfig = Amplify.getConfig();
  console.log({ currentConfig });

  return (
    <div className="App">
      {authStatus === "configuring" && "Loading..."}
      <Router>
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/about">
            About
          </NavLink>
        </div>

        <Routes>
          <Route
            path="/"
            element={route === "authenticated" ? <Home /> : <Authenticator />}
          />
          <Route
            path="/about"
            element={route === "authenticated" ? <Home /> : <Authenticator />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
