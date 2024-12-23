// app/user/chat/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";
import Image from "next/image";
import classNames from "classnames";

// Define the structure of a single chat message
interface ChatMessage {
  id: number;
  sender: "user" | "other";
  text: string;
  timestamp: string;
}

// ChatScreen Component
function ChatScreen({ message, onBack }: { message: any; onBack: () => void }) {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    // Initial mock messages
    {
      id: 1,
      sender: "other",
      text: `Hi, ${message.name}! How are you today?`,
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Hello! I'm good, thank you. How about you?",
      timestamp: "10:02 AM",
    },
    {
      id: 3,
      sender: "other",
      text: "I'm doing well, thanks for asking!",
      timestamp: "10:05 AM",
    },
    {
      id: 4,
      sender: "user",
      text: "Great to hear! What are your plans for today?",
      timestamp: "10:07 AM",
    },
    {
      id: 5,
      sender: "other",
      text: "Just working on some projects and catching up on emails.",
      timestamp: "10:10 AM",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSend = () => {
    if (chatInput.trim() === "") return;
    const newMessage: ChatMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: chatInput.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatMessages([...chatMessages, newMessage]);
    setChatInput("");

    // Simulate a response from the other user after a short delay
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: chatMessages.length + 2,
        sender: "other",
        text: "That's interesting!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center p-4 bg-gray-200 sticky top-0 z-10">
        <button
          aria-label="Back"
          onClick={onBack}
          className="md:hidden text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center space-x-2 ml-4">
          <Image
            src={message.image}
            alt={message.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">{message.name}</h2>
            {message.verified && (
              <span className="text-purple-500 text-sm ml-1">✔</span>
            )}
          </div>
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-grow p-4 overflow-y-auto bg-white">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={classNames("mb-4 flex", {
              "justify-end": msg.sender === "user",
              "justify-start": msg.sender === "other",
            })}
          >
            <div
              className={classNames(
                "max-w-xs px-4 py-2 rounded-lg",
                msg.sender === "user" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
              )}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-right block mt-1">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSend}
            className="ml-2 text-purple-500 hover:text-purple-700"
            aria-label="Send Message"
          >
            <Send className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UserChat() {
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const messages = [
    {
      name: "Grace",
      message: "Ok, See you",
      time: "30 min",
      unread: 1,
      image: "/images/grace.jpg",
      verified: true,
    },
    {
      name: "David Will",
      message: "Ok, See you",
      time: "30 min",
      unread: 1,
      image: "/images/david.jpg",
      verified: true,
    },
    {
      name: "Anand Karthik",
      message: "Ok, See you",
      time: "40 min",
      unread: 2,
      image: "/images/anand.jpg",
      verified: false,
    },
    {
      name: "Smith",
      message: "Ok, See you",
      time: "40 min",
      unread: 2,
      image: "/images/smith.jpg",
      verified: false,
    },
    {
      name: "John",
      message: "Ok, See you",
      time: "1 hour",
      unread: 1,
      image: "/images/john.jpg",
      verified: false,
    },
    {
      name: "Johana Sen",
      message: "Ok, See you",
      time: "1 hour",
      unread: 1,
      image: "/images/johana.jpg",
      verified: false,
    },
    {
      name: "Safana",
      message: "Never mind",
      time: "Yesterday",
      unread: 0,
      image: "/images/safana.jpg",
      verified: false,
    },
    {
      name: "Rajesh",
      message: "Never mind",
      time: "Yesterday",
      unread: 0,
      image: "/images/rajesh.jpg",
      verified: false,
    },
  ];

  return (
    <div className="flex flex-col bg-gray-100 h-full w-full relative">
      {/* Desktop Layout: Two Panes */}
      <div className="hidden md:flex flex-grow">
        {/* Message List */}
        <div className="w-1/3 border-r border-gray-300 flex flex-col">
          {/* Header */}
          <h1 className="text-3xl font-bold p-4 sticky top-0 bg-gray-100 z-10">Messages</h1>

          {/* Search Bar */}
          <div className="px-4 mb-4 sticky top-16 bg-gray-100 z-10">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message List */}
          <ul className="flex-grow overflow-y-auto">
            {messages.map((msg, index) => (
              <li
                key={index}
                onClick={() => setSelectedMessage(msg)}
                className="flex items-center justify-between py-3 px-4 hover:bg-gray-100 cursor-pointer"
              >
                {/* Left Side */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={msg.image}
                    alt={msg.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <h2 className="text-lg font-semibold">{msg.name}</h2>
                      {msg.verified && (
                        <span className="text-purple-500 text-sm">✔</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{msg.message}</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-center">
                  <span className="text-gray-400 text-sm">{msg.time}</span>
                  {msg.unread > 0 && (
                    <span className="bg-purple-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mt-1">
                      {msg.unread}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Screen */}
        <div className="w-2/3 flex flex-col">
          {selectedMessage ? (
            <ChatScreen
              message={selectedMessage}
              onBack={() => setSelectedMessage(null)}
            />
          ) : (
            <div className="flex items-center justify-center flex-grow">
              <p className="text-gray-500">Select a message to start chatting.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout: Single Pane */}
      <div className="md:hidden flex flex-col flex-grow">
        {/* If a message is selected, show ChatScreen */}
        {selectedMessage ? (
          <ChatScreen
            message={selectedMessage}
            onBack={() => setSelectedMessage(null)}
          />
        ) : (
          <div className="flex flex-col h-full">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-gray-100 z-10">
              {/* Header */}
              <h1 className="text-3xl font-bold p-4">Messages</h1>

              {/* Search Bar */}
              <div className="px-4 mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Message List */}
            <ul className="flex-grow overflow-y-auto">
              {messages.map((msg, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedMessage(msg)}
                  className="flex items-center justify-between py-3 px-4 hover:bg-gray-100 cursor-pointer"
                >
                  {/* Left Side */}
                  <div className="flex items-center space-x-3">
                    <Image
                      src={msg.image}
                      alt={msg.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-1">
                        <h2 className="text-lg font-semibold">{msg.name}</h2>
                        {msg.verified && (
                          <span className="text-purple-500 text-sm">✔</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">{msg.message}</p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 text-sm">{msg.time}</span>
                    {msg.unread > 0 && (
                      <span className="bg-purple-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mt-1">
                        {msg.unread}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
