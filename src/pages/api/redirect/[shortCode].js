// pages/api/redirect/[shortCode].js
import { ethers } from "ethers";
import urlShortenerJson from "../../../abi/URLShortener.json";

// export const runtime = "edge";

export default async function handler(req, res) {
  const { shortCode } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
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
      return res.status(200).json({ url: fullUrl });
    }

    return res.status(404).json({ error: "URL not found" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
