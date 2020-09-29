import React from 'react';
import Navigation from './Components/Header/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WhatWeDo from './Views/WhatWeDo';
function App() {
  return (
    <div className="bg-black-t h-screen">
      <Router>
      <Navigation />
      <Switch>
        <Route path="/WhatWeDo">
          <WhatWeDo></WhatWeDo>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
