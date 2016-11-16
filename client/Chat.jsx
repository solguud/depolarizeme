import React from 'react'
import ChatText from './ChatText.jsx'
import ChatMessage from './ChatMessage.jsx'

class Chat extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    setInterval(() => {
      $.get("/chats/"+this.props.params.localUser, (data, err) => {
        if (err) {
          console.log(err)
        } 
        if (data) {
          this.setState({messages: data})
          console.log("response from server: ", data)
        }
      })
    }, 3000)
  }

  postMessage(messageBody) {
    var message = {
      users: [this.props.params.localUser, this.props.params.remoteUser],
      author: this.props.params.localUser,
      body: messageBody
    }
    $.post({
      url: "/chats",
      data: JSON.stringify(message),
      contentType: "application/json"
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.error(err)
    })
  }

  handleNewMessageSubmit(e) {
    e.preventDefault();
    var $text = e.target.childNodes[0]
    var messageText = $text.value;
    this.postMessage(messageText)
    // this.setState({messages: this.state.messages.concat([messageText])})
    $text.value = ''
  }

  render() {
    return (
      <div>
        <ChatText localUser={this.props.params.localUser} party={this.props.params.party} messages={this.state.messages}/>
        <ChatMessage handleSubmit={this.handleNewMessageSubmit.bind(this)}/>
      </div>
    )
  }
}


export default Chat