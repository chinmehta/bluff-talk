import React from "react";

function ChatHeader({ user }) {
  return (
    <>
      <div className="flex items-center">
        <img
          className="rounded-full w-12"
          // src="https://firebasestorage.googleapis.com/v0/b/bluff-talk.appspot.com/o/nJLgpjg3fdNlZI5pI4ymyb3MtlJ2?alt=media&token=ab8c36aa-e324-4bbb-a7ad-a30811337741"
          src={user.photoURL}
          alt="user profile photo"
        />

        <div className="username">{user.email}</div>
      </div>
    </>
  );
}

export default ChatHeader;
