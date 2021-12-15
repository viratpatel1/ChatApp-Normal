import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Join from './Componends/Join';
import Chat from './Componends/Chat';


function App()
{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/chat" component={Chat} />
          {/* <Route path="/" exact component={} />  */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
