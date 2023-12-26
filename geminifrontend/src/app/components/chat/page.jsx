"use client"
import React, { useState, useEffect } from 'react';

function Chat() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate fetching initial messages
    setTimeout(() => {
      setMessages([
        { id: 1, text: 'How can I help you today? 😊' },
      ]);
    }, 1000);
  }, []);

  const handleSendMessage = async () => {
    if (!userInput) return;

    setMessages([
      ...messages,
      { id: messages.length + 1, text: userInput, isUser: true },
    ]);

    // Simulate Bard's response
    setTimeout(() => {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: 'I\'m thinking...' },
        { id: messages.length + 1, text: 'Here\'s my response: ' + generateBardResponse()},
      ]);
    }, 2000);

    setUserInput('');
  };

  // Placeholder for Bard's response generation
  const generateBardResponse = () => {
    // Replace with actual response generation logic
    return `This is a reply to your message: ${userInput}.`;
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Hey There!</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`chat-message ${message.isUser ? 'user' : 'bard'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <button>I</button>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>S</button>
      </div>
    </div>
  );
}

export default Chat;
