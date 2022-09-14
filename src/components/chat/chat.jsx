import React, { useState } from "react";
import "./chat.scss";
import { BsChatFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import CallToAction from "../callToActionBtn/callToAction";
export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className={chat ? "form" : "open form"}>
        <p>
          Please fill out this form below and we will get back to you soon as
          possible
        </p>
        <form action="">
          <input type="text" placeholder="*Name" />
          <input type="text" placeholder="*Email" />
          <textarea placeholder="*Message"></textarea>
          <CallToAction fontSize="1.1rem" width="100%" borderRadius="2px">
            <FiSend /> Submit
          </CallToAction>
        </form>
      </div>
      <div className="activator" onClick={() => setChat((pre) => !pre)}>
        {chat ? <BsChatFill className="icon" /> : <div></div>}
      </div>
    </div>
  );
}
