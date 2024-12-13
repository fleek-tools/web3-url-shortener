import dynamic from "next/dynamic";

// Import the client component with SSR disabled
const URLShortenerApp = dynamic(() => import("../lib/URLShortenerApp"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-dark-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <URLShortenerApp />
    </div>
  );
}
