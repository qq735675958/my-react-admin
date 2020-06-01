import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {mainRouter} from './routes'


ReactDOM.render(
    <Router>
      <Switch>
        <Route path='/admin' render = {(routerProps) => {
          return  <App {...routerProps} />
        }}>
        </Route>
        {
          mainRouter.map(route=>{
            return <Route exact path={route.pathname} key={route.pathname} component={route.component}></Route>
          })
        }
        <Redirect to='/admin' exact></Redirect>
      </Switch>
    </Router>,
  document.getElementById('root')
);


