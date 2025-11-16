import { RefreshCw, ExternalLink, Monitor } from "lucide-react";
import { useState } from "react";
import EmbeddedWebsite from "./EmbeddedWebsite";
import Loading from "./loading";

export const PreviewArea = ({ hostUrl }: { hostUrl: string }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-300 bg-white/30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-sm text-gray-900">Preview</h3>
          <span className="text-xs px-2 py-0.5 rounded-md bg-orange-100 text-orange-400 font-medium">
            Live
          </span>
        </div>

        <div className="flex items-center gap-1">
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className={`p-2 rounded-md hover:bg-gray-100 text-gray-600 ${
              isRefreshing ? "animate-spin" : ""
            }`}
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* External Link Button */}
          <button className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full Preview Content */}

      {hostUrl === "" ? (
        <div className="flex-1 p-6 overflow-auto bg-gray-50">
          <Loading></Loading>
          {/* <div className="w-full h-full bg-white rounded-lg border border-gray-300 shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-lg bg-orange-300 flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Preview Mode
            </h3>
            <p className="text-sm text-gray-600 max-w-md">
              Your app preview will appear here as you build. Start chatting
              with the AI to see your creation come to life.
            </p>
          </div> */}
        </div>
      ) : (
        <div>
          <EmbeddedWebsite hostUrl={hostUrl} />
        </div>
      )}
    </div>
  );
};
