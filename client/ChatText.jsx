import React from 'react'

class ChatText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.messages.length > prevState.messages.length) {
      this.setState({messages: prevProps.messages})
      this.forceUpdate();
    }
  }

  render() {

    var localStyles = {
      backgroundColor: this.props.party === "democrat" ? "red" : "blue"
    }

    var remoteStyles = {
      backgroundColor: localStyles.backgroundColor === "blue" ? "red" : "blue"
    }

    return (
      <div style={ {height: "200px"} }>
       <div>Chat space</div>
       {
        this.state.messages.map((message, idx) => {
          if (message.author === this.props.localUser) {
            return <div style={localStyles} key={idx}>{message.body}</div>
          } else {
            return <div style={remoteStyles} key={idx}>{message.body}</div>
          }
        })
      }
      </div>
    )
  }

}


export default ChatText