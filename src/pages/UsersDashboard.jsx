import React from 'react'
import ChatList from './ChatList'
import UserChat from './UserChat'

function UsersDashboard() {
  return (
    <>
        <div className="dhasboard-container">
            <ChatList></ChatList>
            <UserChat></UserChat>
        </div>
    </>
  )
}

export default UsersDashboard