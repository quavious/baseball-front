import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Main from './components/main'
import Calander from './components/calander'
import Player from './components/player'
import {Header, Footer, FooterMobile} from './components/common'
import Community from './components/community'
import CommunityParam from './components/community/params'
import CommunityWrite from './components/community/write'
import PlayerParam from './components/player/params'
import Result01 from './components/result/result01'
import Result02 from './components/result/result02'
import {useState, useEffect} from 'react';

const App = () => {
  const [width, setWidth] = useState(false)
  useEffect(() => {
    window.addEventListener("resize", function(e){
      const newWidth = e.target.screen.width
      if (newWidth < 992) {
        setWidth(true)
      } else {
        setWidth(false)
      }
    })
    return () => window.removeEventListener("resize", function(e) {
      const newWidth = e.target.screen.width
      if (newWidth < 992) {
        setWidth(true)
      } else {
        setWidth(false)
      }
    })
  }, [])
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact main={true} component={Main}/>
          <Route path="/calander" exact component={Calander}/>
          <Route path="/player" exact component={Player} />
          <Route path="/player/:id" exact component={PlayerParam} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/community" exact component={Community} />
          <Route path="/community/post/:id" exact component={CommunityParam} />
          <Route path="/community/write" exact component={CommunityWrite} />
          <Route path="/result/01" exact component={Result01} />
          <Route path="/result/02" exact component={Result02} />
        </Switch>
        {width ? <FooterMobile /> : <Footer />}
      </Router>
    </>
  );
}

export default App;
