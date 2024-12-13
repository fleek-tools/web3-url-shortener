import { http, createConfig } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = `cc3c98235ab530a118494aeaf3f24288`;

export const config = getDefaultConfig({
  appName: "url-shortener",
  projectId: projectId,
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http(),
  },
  ssr: false,
});
