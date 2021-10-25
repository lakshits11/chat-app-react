import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="83ca7ea5-aab9-4903-84cf-15466b1199b9"
      userName="lakshitsomani"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
