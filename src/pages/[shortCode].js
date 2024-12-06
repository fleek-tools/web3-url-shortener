import { ethers } from "ethers";
import urlShortenerJson from "../abi/UrlShortener.json";

export const runtime = 'experimental-edge'

export async function getServerSideProps(context) {
  const { shortCode } = context.params;
  const provider = new ethers.JsonRpcProvider(
    "https://arb-sepolia.g.alchemy.com/v2/NiaoOlWmEe3y5sU3a3c4artPHYXj2xYq"
  );

  try {
    const network = await provider.getNetwork();
    console.log("Network details:", network);

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      urlShortenerJson.abi,
      provider
    );

    // Query events to verify URL was set
    const filter = contract.filters.URLShortened(shortCode);
    const events = await contract.queryFilter(filter);
    console.log("URL Events:", events);

    const url = await contract.getURL(shortCode);
    console.log("URL returned:", url);

    if (url && url !== "") {
      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      return {
        redirect: {
          destination: fullUrl,
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return {
    props: { shortCode, error: "URL not found" },
  };
}

export default function ShortCodePage({ shortCode, error }) {
  return (
    <div className="min-h-screen bg-gray-dark-1 flex items-center justify-center">
      <div className="bg-gray-dark-2 p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-dark-4">
        <h1 className="text-2xl font-bold mb-4 text-yellow-dark-9">Error</h1>
        <p className="text-red-dark-11 mb-4">{error}</p>
        <a
          href="/"
          className="text-yellow-dark-9 hover:text-yellow-dark-10 hover:underline"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
