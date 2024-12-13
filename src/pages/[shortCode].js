// pages/[shortCode].js
import { ethers } from "ethers";
import urlShortenerJson from "../abi/URLShortener.json";

export const runtime = 'experimental-edge';

export async function getServerSideProps(context) {
  const { shortCode } = context.params;

  // Debug info object
  const envCheck = {
    hasRpcUrl: !!process.env.NEXT_PUBLIC_RPC_URL,
    hasContractAddress: !!process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    shortCode: shortCode,
    rpcUrlStart: process.env.NEXT_PUBLIC_RPC_URL?.slice(0, 10) + "...",
    timestamp: new Date().toISOString()
  };

  try {
    // Check environment variables
    if (!process.env.NEXT_PUBLIC_RPC_URL || !process.env.NEXT_PUBLIC_CONTRACT_ADDRESS) {
      return {
        props: { 
          error: "Missing environment configuration",
          debug: envCheck
        }
      };
    }

    // Initialize provider with timeout
    const provider = new ethers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_RPC_URL,
      undefined,
      { timeout: 30000 }
    );

    envCheck.providerInitialized = true;

    // Initialize contract
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      urlShortenerJson.abi,
      provider
    );

    envCheck.contractInitialized = true;

    // Add a custom request timeout
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Contract call timeout')), 30000)
    );
    
    // Race between contract call and timeout
    const longUrl = await Promise.race([
      contract.getURL(shortCode),
      timeoutPromise
    ]);

    envCheck.longUrlReceived = !!longUrl;

    if (longUrl && longUrl !== "") {
      const fullUrl = longUrl.startsWith("http") ? longUrl : `https://${longUrl}`;
      return {
        redirect: {
          destination: fullUrl,
          permanent: false,
        },
      };
    }

    // URL not found case
    return {
      props: {
        error: "URL not found",
        debug: {
          ...envCheck,
          contractCallCompleted: true,
          urlFound: false
        }
      }
    };

  } catch (error) {
    // Error handling
    const errorInfo = {
      ...envCheck,
      message: error.message,
      type: error.constructor.name,
      code: error.code,
    };

    return {
      props: {
        error: "Error retrieving URL",
        debug: errorInfo
      }
    };
  }
}

export default function ShortCodePage({ error, debug }) {
  return (
    <div className="min-h-screen bg-gray-dark-1 flex items-center justify-center">
      <div className="bg-gray-dark-2 p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-dark-4">
        <h1 className="text-2xl font-bold mb-4 text-yellow-dark-9">Error</h1>
        <p className="text-red-dark-11 mb-4">{error}</p>
        {debug && (
          <pre className="text-xs text-gray-400 mb-4 overflow-auto">
            {JSON.stringify(debug, null, 2)}
          </pre>
        )}
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