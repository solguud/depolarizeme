import React from 'react'
import { Link } from 'react-router'

class PartyChooser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localUser: "",
      remoteUser: "standin"
    }
  }

  generateUsername() {
    //eventually this should be replaced with oAuth or something more secure but for now this will do.
    var username = '';
    for (var i = 0; i < 20; i++) {
      username += String.fromCharCode(Math.floor(97+(Math.random()*26)))
    }
    return username
  }

  componentDidMount() {
    var usr = this.generateUsername()
    this.setState({localUser: usr});
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div data-reactroot="">
        <div className="jumbotron">
          <div className="container">
            <div>
              <h1>Depolarize Me</h1>
            </div>
            <div>
              <p>The USA is politically polarized. Most of the people we know share our views. Want to chat with the other side?</p>
            </div>
            <div>
              <h3>Choose your party</h3>
            </div>
          </div>
          <div className="button-left">
            <button>
              <Link to={"/waiting/democrat/" + this.state.localUser}><img src="http://www.clipartkid.com/images/64/democratic-donkey-image-cF24Aj-clipart.jpeg" height="100" width="100" />Democrat</Link>
            </button>
          </div>
          <div className="button-right">
            <button>
              <Link to={"/waiting/republican/" + this.state.localUser}><img src="http://voteforthepresidentonline.com/wp-content/uploads/2016/03/GOP-Elephant.jpeg" height="100" width="150" />Republican</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PartyChooser