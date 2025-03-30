import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Paperclip } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome to Excellence Academy chat support. How can we help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:4000/api/v1/chat/ask", {
        message: input,
      });

      const botResponse = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="z-50 fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <Bot size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="z-50 fixed bottom-6 right-4 w-[90vw] sm:w-[380px] max-w-[95vw] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <div className="bg-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="text-white" size={24} />
                <h3 className="text-white text-lg font-semibold">
                  Excellence Academy Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-orange-600 rounded-full p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-2">
                      <Bot size={20} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[75%] text-sm rounded-2xl px-4 py-2 ${message.sender === "user" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-800"}`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-2">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="max-w-[75%] text-sm rounded-2xl px-4 py-2 bg-gray-100 text-gray-800">
                    <span className="inline-flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="border-t p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 border"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`text-white rounded-full p-2 transition-colors ${input.trim() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`}
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
