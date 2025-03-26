import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Paperclip } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to Excellence Academy chat support. How can we help you?'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = { sender: 'bot', text: 'Processing your request...' };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="z-50 fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        hidden={isOpen}
      >
        <Bot size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="z-50 fixed bottom-6 right-4 w-[90vw] sm:w-[380px] max-w-[95vw] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="text-white" size={24} />
                <h3 className="text-white text-lg font-semibold">Excellence Academy Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-orange-600 rounded-full p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 flex-1">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-2">
                      <Bot size={20} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] text-sm md:text-base rounded-2xl px-4 py-2 ${
    message.sender === 'user'
      ? 'bg-orange-500 text-white'
      : 'bg-gray-100 text-gray-800'
  }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-white rounded-full px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 border"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition-colors"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
