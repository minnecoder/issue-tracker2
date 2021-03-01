import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Tickets from './pages/Tickets';
import Dashboard from './pages/Dashboard';
import ManageRoles from './pages/ManageRoles';
import ManageUsers from './pages/ManageUsers';
import Projects from './pages/Projects';
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <div>
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/manageroles" component={ManageRoles} />
          <Route path="/manageusers" component={ManageUsers} />
          <Route path="/projects" component={Projects} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/register" component={Register} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
