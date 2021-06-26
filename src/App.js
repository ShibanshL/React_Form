import Try from './Component/Try'
import Edit from './Component/Edit'

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home2 from './Component/Home2';
// import Nedit from './Component/Nedit';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
              <Route exact path="/" component={Try}/>
              <Route exact path="/edit/:id" component={Edit}/>
              <Route exact path="/nhome" component={Home2}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
