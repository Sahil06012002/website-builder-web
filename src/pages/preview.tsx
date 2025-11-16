// import { getChatResponse } from "@/api/chat";
// import EmbeddedWebsite from "@/components/EmbeddedWebsite";
// import React, { useEffect, useState } from "react";

// interface PreviewProps {
//   message: string;
// }
// export default function Preview(props: PreviewProps) {
//   const [websiteLoading, setWebsiteLoading] = useState<boolean>(true);
//   const [hostUrl, setHostUrl] = useState<string>(
//     "https://5173-ijv6o4t3m5z0s2bsreapu.e2b.app/"
//   );

//   useEffect(() => {
//     const buildWebsite = async () => {
//       const response = await getChatResponse(props.message);
//       setHostUrl(response.hostUrl);
//       setWebsiteLoading(false);
//     };
//     buildWebsite();
//   }, []);

//   return (
//     <div>
//       {websiteLoading ? (
//         <EmbeddedWebsite hostUrl={hostUrl} />
//       ) : (
//         <EmbeddedWebsite hostUrl={hostUrl} />
//       )}
//     </div>
//   );
// }
