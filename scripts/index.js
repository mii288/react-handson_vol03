import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Home from './containers/home';
import List from './containers/list';

import './index.css';

injectTapEventPlugin();

class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  onMenuStateChange(showMenu) {
    this.setState({ showMenu });
  }

  // ルーティングの設定をJSXで書く
  render() {
    return (
      <MuiThemeProvider>
        // 全体をRouterで囲む
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            // ネスト /list/a
            <IndexRoute component={Home} />

            <Route path="/list" component={List}>
              <IndexRoute component={Detail} />
              <Route path=":id" component={Detail} />
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<Root />, document.getElementById('app'));
