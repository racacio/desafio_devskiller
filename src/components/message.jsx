import React from "react";

export const Message = (props) => (
  <div className="text-center">
    <h3 className="message-header">{props.header}</h3>
    {props.text && <div className="message-body">{props.text}</div>}
    {!props.text && <div className="message-body">Text HTML Content</div>}
  </div>
);
