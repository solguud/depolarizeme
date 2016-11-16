import React from 'react'

var ChatMessage = ({handleSubmit}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text"></input>
      <input type="submit" value="Send"></input>
    </form>
  </div>
)

export default ChatMessage