import React from 'react'
import { attachModelToView } from './vendors_modules/Rhelena'
import AppModel from './AppModel'

class App extends React.Component {

  componentWillMount() {
    attachModelToView(new AppModel(), this);
  }

  render() {
    return (
            <div>
              <h1>This is a React Rheleana starter !</h1>
              <h2> This is from model: {this.state.simpleText}</h2>
              <button onClick={this.viewModel.changeSimpleText}>Update text</button>
            </div>
          )
  }
}

export default App
