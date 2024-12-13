"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import web3 components with ssr disabled
const Web3Providers = dynamic(
  () => import("./Web3Providers").then((mod) => mod.default),
  { ssr: false }
);

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <Web3Providers>{children}</Web3Providers>;
}
