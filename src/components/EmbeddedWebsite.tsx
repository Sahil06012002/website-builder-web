type EmbeddedWebsiteProps = {
  hostUrl: string;
};
export default function EmbeddedWebsite({ hostUrl }: EmbeddedWebsiteProps) {
  return <iframe className="h-screen w-full" src={hostUrl}></iframe>;
}
