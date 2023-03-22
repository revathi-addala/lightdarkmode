import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState = prevState => ({isDarkMode: !prevState.isDarkMode})
  }

  render() {
    const {isDarkMode} = this.state
    const modeChange = isDarkMode ? 'darkmode' : 'lightmode'
    const buttontext = isDarkMode ? 'Lightmode' : 'darkmode'

    return (
      <div className="app-container">
        <div className={`container ${modeChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttontext}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
