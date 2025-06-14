'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { useChatBot } from '@/hooks/useChatBot';
import { getChatBotConfig } from '@/lib/chatbot-config';

/**
 * Main ChatBot component that handles the floating chat bubble and chat window
 * Integrated with N8N webhook for AI agent communication
 */
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const config = getChatBotConfig();
  const {
    messages,
    inputMessage,
    setInputMessage,
    isTyping,
    isLoading,
    sendMessage,
    messagesEndRef
  } = useChatBot();

  // Handle chat window toggle
  const toggleChat = () => setIsOpen(!isOpen);

  // Handle message submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && !isLoading) {
      await sendMessage(inputMessage.trim());
      setInputMessage('');
    }
  };

  // Handle Enter key submission
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 sm:bottom-6 sm:right-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
      >
        <motion.button
          onClick={toggleChat}
          className="w-16 h-16 bg-gold-gradient rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: isOpen 
              ? "0 0 0 0 rgba(245, 158, 11, 0.4)" 
              : [
                  "0 0 0 0 rgba(245, 158, 11, 0.4)",
                  "0 0 0 10px rgba(245, 158, 11, 0)",
                  "0 0 0 0 rgba(245, 158, 11, 0)"
                ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: isOpen ? 0 : Infinity,
              repeatType: "loop"
            }
          }}
          aria-label="Open AI Chat Assistant"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XMarkIcon className="w-8 h-8 text-dark-950" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-dark-950" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] glass-dark shadow-2xl rounded-2xl overflow-hidden flex flex-col sm:w-96 sm:bottom-24 sm:right-6"
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
              transformOrigin: "bottom right"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          >
            {/* Chat Header */}
            <div className="bg-dark-900/90 border-b border-gold-500/20 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-dark-950 font-bold text-sm">AI</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{config.branding.name}</h3>
                  <p className="text-gold-400 text-xs">{config.branding.description}</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar min-h-0">
              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 bg-gold-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-dark-950" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">¡Hola! 👋</h4>
                  <p className="text-gray-400 text-sm">
                    Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?
                  </p>
                </motion.div>
              )}

              {/* Messages */}
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {/* Typing Indicator */}
              {isTyping && <TypingIndicator />}

              {/* Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gold-500/20 p-4">
              <form onSubmit={handleSubmit} className="flex items-end space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={config.ui.placeholderText}
                  className="flex-1 bg-dark-800 border border-gold-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none min-h-[48px] max-h-32 overflow-y-auto"
                  rows={1}
                  disabled={isLoading}
                  style={{
                    height: 'auto',
                    minHeight: '48px',
                    maxHeight: '128px'
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                  }}
                />
                <motion.button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-gold-gradient text-dark-950 p-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 