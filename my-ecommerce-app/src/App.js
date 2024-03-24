import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />

          {/* Add other routes for products, login, etc. */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
