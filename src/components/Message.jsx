import React from "react";

function Message({ messageObject }) {
  return (
    <>
      <div className="message-container flex justify-between w-fit max-w-80 break-words px-2 py-1 m-1 bg-brown-light">
        <span className="message-text">messageObject.text Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eum. Officiis sit atque ut quae odio soluta neque beatae minus, fuga dolore, exercitationem sed esse sapiente, accusamus enim repellat adipisci.</span>
        <span className="time-text flex items-end pl-">messageObject.time</span>
      </div>
    </>
  );
}

export default Message;
