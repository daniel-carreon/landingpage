/**
 * Chatbot Configuration
 * Centralized configuration for the AI chatbot widget
 */

export interface ChatBotConfig {
  webhook: {
    url: string;
    fallbackUrl?: string;
    timeout: number;
    testTimeout?: number;
    retries: number;
  };
  ui: {
    position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    theme: 'dark' | 'light' | 'auto';
    showTimestamps: boolean;
    maxMessages: number;
    welcomeMessage: string;
    placeholderText: string;
  };
  features: {
    enableAudio: boolean;
    enableFileUpload: boolean;
    enableTypingIndicator: boolean;
    enableMessageStatus: boolean;
  };
  branding: {
    name: string;
    avatar: string;
    description: string;
  };
}

/**
 * Default chatbot configuration
 * Modify these values to customize the chatbot behavior
 */
export const defaultChatBotConfig: ChatBotConfig = {
  webhook: {
    // SMART WEBHOOK SYSTEM: Test (priority) + Production (fallback)
    url: 'https://zzn8n.danielcarreon.site/webhook-test/chat', // Primary (TEST)
    fallbackUrl: 'https://zzwebhookn8n.danielcarreon.site/webhook/chat', // Fallback (PROD)
    timeout: 30000, // 30 seconds for production
    testTimeout: 3000, // 3 seconds for test webhook
    retries: 3
  },
  ui: {
    position: 'bottom-right',
    theme: 'dark', // Matches your site's dark theme
    showTimestamps: true,
    maxMessages: 100, // Limit conversation history
    welcomeMessage: '¡Hola! 👋\n\nSoy tu asistente de IA. ¿En qué puedo ayudarte hoy?',
    placeholderText: 'Escribe tu mensaje...'
  },
  features: {
    enableAudio: false, // Set to true when ready for audio support
    enableFileUpload: false,
    enableTypingIndicator: true,
    enableMessageStatus: true
  },
  branding: {
    name: 'AI Assistant',
    avatar: 'AI', // Could be a URL to an image
    description: 'Aquí para ayudarte 24/7'
  }
};

/**
 * Get chatbot configuration
 * In the future, this could load from environment variables or API
 */
export function getChatBotConfig(): ChatBotConfig {
  return defaultChatBotConfig;
}

/**
 * WEBHOOK SETUP INSTRUCTIONS
 * 
 * To connect this chatbot to your N8N workflow:
 * 
 * 1. Copy your N8N webhook URL from your workflow
 * 2. Go to line 36 in this file (webhook.url)
 * 3. Replace 'https://your-n8n-instance.com/webhook/chatbot-test' with your URL
 * 
 * Example N8N webhook URLs:
 * - https://your-domain.com/webhook/chatbot
 * - https://n8n.your-company.com/webhook/ai-assistant
 * - https://hooks.zapier.com/hooks/catch/... (if using Zapier)
 * 
 * Expected payload format sent to N8N (GET request with query params):
 * https://your-webhook-url?message=User%20message&timestamp=2024-01-01T00:00:00.000Z&sessionId=session_123&source=landing-page-chatbot&userAgent=Mozilla...
 * 
 * Expected response format from N8N (any of these work):
 * Option 1: { "response": "AI assistant response" }
 * Option 2: { "message": "AI assistant response" }
 * Option 3: "Direct string response"
 * Option 4: { "data": { "response": "AI assistant response" } }
 */ 