import { useState } from "react";
import { ChatInterface } from "@/components/chatInterface";
import { PreviewArea } from "@/components/previewArea";
import { WelcomeScreen } from "@/components/welcomeScreen";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getChatResponse } from "@/api/chat";

// Temporary basic Navbar (since you don’t have one yet)

export default function Index() {
  const [hasStarted, setHasStarted] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState<string>("");
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [response, setResponse] = useState("");
  const handleWelcomeSubmit = async (prompt: string) => {
    setInitialPrompt(prompt);
    setHasStarted(true);
    if (prompt.length > 0 && response.length === 0) {
      const resp = await getChatResponse(prompt);
      setResponse(resp);
      console.log(resp);
    }
  };
  if (!hasStarted) {
    return <WelcomeScreen onSubmit={handleWelcomeSubmit} />;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Chat Panel */}
        <div
          className={`${
            isChatVisible ? "flex" : "hidden"
          } md:flex w-full md:w-[400px] lg:w-[440px] shrink-0 bg-white`}
        >
          <ChatInterface initialPrompt={initialPrompt} response={response} />
        </div>

        {/* Toggle Chat Button (Visible on small screens) */}
        <button
          onClick={() => setIsChatVisible(!isChatVisible)}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-md md:hidden"
        >
          {isChatVisible ? (
            <PanelLeftClose className="w-5 h-5 text-gray-700" />
          ) : (
            <PanelLeftOpen className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Preview Panel */}
        <div
          className={`${
            isChatVisible ? "hidden md:flex" : "flex"
          } flex-1 overflow-hidden bg-gray-100`}
        >
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
