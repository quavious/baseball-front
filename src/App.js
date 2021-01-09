import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Calander from './components/calander'
import Player from './components/player'
import {Header, Footer} from './components/common'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/calander" exact>
            <Calander />
          </Route>
          <Route path="/player" exact>
            <Player />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
