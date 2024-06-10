import React, { useState, useEffect, useRef } from 'react';
import './HackDisplay.css'; // Import your CSS file for styling

function HackDisplay() {
  const [messages, setMessages] = useState([]);
//   const messagesEndRef = useRef(null); // Ref to scroll to the bottom

  const hackSequence = [
    "Hacking Instagram Account",
    "Initializing Hack tool...",
    "Connecting to Instagram.....",
    "Connecting to server 1...",
    "[ERROR] Connection failed. Retrying...",
    "Connecting to server 2...",
    "[ERROR] Connection failed. Retrying...",
    "Connecting to server 3...",
    "[SUCCESS] Connected...",
    `Target Username:.... `,
    `"rana.anirudh"`,
    " ",
    "[BRUTE FORCE] Initiated...",
    "200K passwords tried...",
    "...Match not found...",
    "400K passwords tried...", // More password attempts
    "...Match not found...",
    "600K passwords tried...",
    "[SUCCESS] Match found!", 
    "Accessing Account...",
    "[SUCCESS] Hack Successful!",
    "Extracting data...",
    "Hack succesful, details sent to admin.." // Additional steps for realism
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < hackSequence.length) {
        setMessages(prevMessages => [...prevMessages, hackSequence[index]]);
        index++;
      } else {
        clearInterval(intervalId); // Stop after sequence completes
      }
    }, 800); // Adjust timing for different effects (800ms)

    return () => clearInterval(intervalId); 
  }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); // Auto-scroll
//   }, [messages]); 

  return (
    <div className="hack-container">
      <div >
        {messages.map((message, index) => (
          <div key={index}>
            {message}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default HackDisplay;
