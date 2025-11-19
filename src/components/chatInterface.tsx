import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { getChatResponse } from "@/api/chat";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string | undefined;
  timestamp: Date;
}

interface ChatInterfaceProps {
  initialUserMessage: string;
  response?: string;
  updateHostUrl: (hostUrl: string) => void;
}

export const ChatInterface = ({
  initialUserMessage,
  response,
  updateHostUrl,
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function fetchData() {
    const response = await getChatResponse(initialUserMessage);
    updateHostUrl(response.hostUrl);
    const llmMessage: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: `${response.answer}. You can visit the deployed website here on this link: ${response.hostUrl} `,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, llmMessage]);
  }
  useEffect(() => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: initialUserMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    fetchData();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    // if (!input.trim()) return;
    // const userMessage: Message = {
    //   id: Date.now().toString(),
    //   role: "user",
    //   content: input,
    //   timestamp: new Date(),
    // };
    // setMessages((prev) => [...prev, userMessage]);
    // setInput("");
    // setIsTyping(true);
    // await fetchData();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg w-full">
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-100">
        <div className="w-8 h-8 rounded-md bg-orange-300 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="font-medium text-sm">AI Assistant</h2>
          <p className="text-xs text-gray-500">Ready to help</p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 px-4 py-6 overflow-y-auto space-y-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                message.role === "assistant" ? "bg-orange-300" : "bg-gray-300"
              }`}
            >
              {message.role === "assistant" ? (
                <Bot className="w-4 h-4 text-white" />
              ) : (
                <User className="w-4 h-4 text-gray-700" />
              )}
            </div>

            <div
              className={`flex-1 ${
                message.role === "user" ? "text-right" : ""
              }`}
            >
              <div
                className={`inline-block px-3 py-2 rounded-lg text-sm ${
                  message.role === "assistant"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-orange-300 text-white"
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-1 px-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-orange-300 flex items-center justify-center rounded-md">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2 items-end">
          <textarea
            value={input}
            disabled={true}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Upgrade to premium to edit your live site.🔒"
            rows={1}
            className="flex-1 min-h-10 max-h-32 resize-none border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={handleSend}
            // disabled={!input.trim() || isTyping}
            disabled={true}
            className="h-10 w-10 flex items-center justify-center bg-orange-300 hover:bg-orange-400 disabled:bg-orange-300 text-white rounded-md transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};
