import React from 'react'
import { browserHistory, Link } from 'react-router'

class WaitingRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localUser:  this.props.params.localUser,
      remoteUser: null,
      resolved: false
    }
  }

  componentDidMount() {
    this.enterWaitingRoom()
    this.getActiveUsers()
  }

  enterWaitingRoom() {
    var userData = {
      username: this.props.params.localUser,
      party: this.props.params.party
    }
    $.post({
      url: "/users",
      data: JSON.stringify(userData),
      contentType: "application/json"
    }).then((data) => {
      console.log("User has been saved in database: ", data)
    }).catch((err) => {
      console.error(err)
    })
  }

  getActiveUsers() {
    // var otherParty = this.props.params.party === "democrat" ? "republican" : "democrat"
    var intID = setInterval(() => {
      if (this.state.remoteUser !== null) {
        this.setState({resolved: true});
        clearInterval(intID)
        return 1;
      }
      $.get("/users/"+this.props.params.party+"/"+ this.state.localUser, (data, err) => {
        if (err) {
          console.log(err)
        } 
        if (data && data !== "no active users found.") {
          this.setState({remoteUser: data})
          console.log("List of possible user connections: ", data)
          browserHistory.push("/chat/" + this.props.params.party + "/" + this.state.localUser + "/" + data)
        }
      })
    }, 3000)
  }

  render() {
    return (
      <div>
        { this.state.resolved ? <div><Link to={"/chat/"+this.props.params.party+"/"+this.state.localUser+"/"+this.state.remoteUser}>request resolved</Link></div> :
        <div>Please wait.  We are connecting you to another user.</div>
        }
      </div>
    )
  }
  
}

export default WaitingRoom