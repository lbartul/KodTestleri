
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <h1>Main Page</h1>
          </Route>
          <Route exact path="/error">
          <h1>Error Page</h1>
          </Route>
        </Switch>
  )
}

export default App
