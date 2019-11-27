import * as React from 'react'
import {hot} from 'react-hot-loader'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import loadComponent from '@components/Load'

const Login = loadComponent(() => import('@views/Login'))
const Home = loadComponent(() => import('@views/Home'))
const Art = loadComponent(() => import('@views/Art'))
const ArtList = loadComponent(() => import('@views/Art/List'))
const ArtAdd = loadComponent(() => import('@views/Art/Add'))
const ArtDraft = loadComponent(() => import('@views/Art/Draft'))
const ArtPre = loadComponent(() => import('@views/Art/Pre'))

const Tag = loadComponent(() => import('@views/Tag'))
const TagList = loadComponent(() => import('@views/Tag/List'))
const TagAdd = loadComponent(() => import('@views/Tag/Add'))

const FeedMe = loadComponent(() => import('@views/FeedMe'))
const Life = loadComponent(() => import('@views/Life'))
const History = loadComponent(() => import('@views/Life/History'))
const Self = loadComponent(() => import('@views/Life/Self'))

const Page = loadComponent(() => import('@views/Page'))

// test mobx
const Counter = loadComponent(() => import('@views/Counter'))
@hot(module)
class App extends React.Component{
  constructor(props: any){
    super(props)
    this.state = {
      hasLogin: true
    }
  }
  // getDefaultRoute() {
  //   const defaultState = <Route to="/art"/>
  //   const loginState = <Route to="/login"/>
  //   return this.state.hasLogin ? defaultState : loginState
  // }
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/count" component={Counter} />
          <Home path="/" component={Home}>
            {/* <Route path="/art" component={Art} /> */}
            <Route path="/art/list" component={ArtList} />
            <Route path="/art/add" component={ArtAdd} />
            {/* <Route path="/art/draft" component={ArtDraft} /> */}
            {/* <Route path="/tag" component={Tag} /> */}
            <Route path="/art/pre" component={ArtPre} />

            <Route path="/tag/list" component={TagList} />
            <Route path="/tag/add" component={TagAdd} />

            <Route path="/feedme" component={FeedMe} />
            <Route path="/life/history" component={History} />
            <Route path="/life/self" component={Self} />
          </Home>
          {/* <Route path="/home" component={Home} render={()=> (<Redirect to={this.getDefaultRoute()}/>)} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App