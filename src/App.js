import {Switch, Route, useLocation} from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Main from './components/main'
import Calander from './components/calander'
import Player from './components/player'
import {Header} from './components/common/header'
import {Footer, FooterMobile} from './components/common/footer'
import Community from './components/community'
import CommunityParam from './components/community/params'
import CommunityWrite from './components/community/write'
import PlayerParam from './components/player/params'
import Result01 from './components/result/result01'
import Result02 from './components/result/result02'
import {useState, useEffect} from 'react';

const App = () => {
  const [mobile, isMobile] = useState(false)
  useEffect(() => {
    const handleMobile = function(e){
      const newWidth = window.screen.width
      if (newWidth < 992) {
        isMobile(true)
      } else {
        isMobile(false)
      }
    }
    window.addEventListener("load", handleMobile)
    window.addEventListener("resize", handleMobile)
    return () => {
      window.removeEventListener("load", handleMobile)
      window.removeEventListener("resize", handleMobile)
    }
  }, [])
  return (
    <>
      <Header root={useLocation().pathname === "/"} mobile={mobile}/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <div className="my-4">
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
          </div>
        </Switch>
        {mobile ? <FooterMobile /> : <Footer />}
    </>
  );
}

export default App;
