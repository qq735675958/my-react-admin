import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.less';
import Layout from './components/Layout'
import { adminRouter } from './routes';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    console.log(this.GetQueryString("accestoken"))
    if(sessionStorage.getItem("keys") || this.GetQueryString("accestoken")){
      console.log("0000")
    }else{
      // window.location.href = "http://www.baidu.com"
    }
  }

  componentDidMount() {
    
  }



  GetQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
  }



  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            {
              adminRouter.map(route => {
                return <Route
                  key={route.pathname}
                  path={route.pathname}
                  exact={route.exact}
                  render={(routerProps) => {
                    return <route.component  {...routerProps} />
                  }} />
              })
            }
            <Redirect to={adminRouter[0].pathname} from="/admin" exact />
            <Redirect to='/404' />
          </Switch>
        </Layout>
      </Fragment>
    );
  }
}

export default App;

