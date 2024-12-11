import { ethers } from "ethers";
import urlShortenerJson from "../../../abi/URLShortener.json";

export const runtime = "edge";

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const shortCode = searchParams.get("shortCode");

  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const provider = new ethers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_RPC_URL
    );

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      urlShortenerJson.abi,
      provider
    );

    const url = await contract.getURL(shortCode);

    if (url && url !== "") {
      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      return new Response(JSON.stringify({ url: fullUrl }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "URL not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
