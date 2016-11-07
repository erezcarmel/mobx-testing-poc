import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import AppState from './AppState';
import Actions from './Actions';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

const appState = new AppState();
const actions = new Actions(appState);
  
@observer
class App extends Component {
  render() {
    return (
      <div id="configuration">
        <Sidebar sections={appState.SECTIONS} actions={actions}/>
        <Content section={appState.section} actions={actions} content={appState.content}/>
        <DevTools />
      </div>
    );
  }
}

export default App;
