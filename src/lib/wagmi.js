import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrumSepolia } from "wagmi/chains";

const projectId = `cc3c98235ab530a118494aeaf3f24288`;

export const config = getDefaultConfig({
  appName: "url-shortener",
  projectId,
  chains: [arbitrumSepolia],
  ssr: true,
});
