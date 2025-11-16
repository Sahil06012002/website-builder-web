import { ChatInterface } from "@/components/chatInterface";
import { PreviewArea } from "@/components/previewArea";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ESModulesEvaluator } from "vite/module-runner";

export default function Chat() {
  const [initialPrompt, setInitialPrompt] = useState<string>("");
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [response, setResponse] = useState("");
  const [hostUrl, setHostUrl] = useState<string>("");
  const [chats, setChats] = useState<string[]>([]);

  const [params] = useSearchParams();
  let message = params.get("message");
  if (!message) {
    message = "";
  }

  console.log(message);

  function updateHostUrl(hostUrl: string) {
    setHostUrl(hostUrl);
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      <Navbar />

      <div className="flex-1 flex overflow-hidden relative">
        <div
          className={`${
            isChatVisible ? "flex" : "hidden"
          }md:flex w-full md:w-[400px] lg:w-[440px] shrink-0 bg-white`}
        >
          <ChatInterface
            initialUserMessage={message}
            response={response}
            updateHostUrl={updateHostUrl}
          />
        </div>

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

        <div
          className={`${
            isChatVisible ? "hidden md:flex" : "flex"
          } flex-1 overflow-hidden bg-gray-100`}
        >
          <PreviewArea hostUrl={hostUrl} />
        </div>
      </div>
    </div>
  );
}
