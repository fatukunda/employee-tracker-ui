import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import EmployeesPage from "./pages/EmployeesPage";
import Footer from "./components/Footer";
export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={EmployeesPage} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
