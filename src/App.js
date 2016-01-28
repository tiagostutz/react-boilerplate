import React from 'react'
import { attachModelToView } from './vendors_modules/Rhelena'
import AppModel from './AppModel'

class App extends React.Component {

  componentWillMount() {
    attachModelToView(new AppModel(), this);
  }

  render() {
    return <h1>This is a React Rheleana starter !</h1>
  }
}

export default App
