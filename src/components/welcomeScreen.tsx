import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim()) {
      navigate(`/chat?message=${input}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-300 via-gray-50 to-orange-300">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 " />

        <div className="relative z-10 w-full max-w-2xl">
          {/* Tagline */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
              What would you like to build?
            </h2>
            <p className="text-base text-gray-600">
              Describe your app idea and watch it come to life
            </p>
          </div>

          {/* Input Area */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="E.g., Create a todo app with dark mode and priority levels..."
              className="min-h-[140px] w-full text-base resize-none border-0 focus:ring-0 focus:outline-none bg-transparent p-4"
            />

            <div className="flex items-center justify-between px-4 pb-4 pt-2">
              <p className="text-xs text-gray-500">Press Enter to start</p>
              <button
                onClick={handleSubmit}
                disabled={!input.trim()}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Building
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-3">Try an example:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Landing page for a SaaS product",
                "Dashboard with charts",
                "Portfolio website",
              ].map((example, i) => (
                <button
                  key={i}
                  onClick={() => setInput(example)}
                  className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-xs text-gray-800 transition"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
          {/* {response && (
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Chat Response:</h2>
              <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
                {response}
              </pre>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
