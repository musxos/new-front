export const chainConfigs = [
  {
    chainName: "Avalanche",
    chainId: "0xa86a",
  },
  {
    chainName: "BSC",
    chainId: "0x38",
  },
  {
    chainName: "Ethereum",
    chainId: "0x1",
  },
  {
    chainName: "Fantom",
    chainId: "0xfa",
  },
  {
    chainName: "Polygon",
    chainId: "0x89",
  },
];

export const chainIdToInfo = {
  "0x1": {
    rpcURL: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    blockExplorer: "https://etherscan.io",
    chainName: "Ethereum",

    configs: {
      name: "Ethereum Mainnet",
      chain: "ETH",
      network: "mainnet",
      icon: "ethereum",
      rpc: [
        `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
        `wss://mainnet.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
        "https://api.mycryptoapi.com/eth",
        "https://cloudflare-eth.com",
      ],
      faucets: [],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      infoURL: "https://ethereum.org",
      shortName: "eth",
      chainId: "0x1",
      networkId: 1,
      slip44: 60,
      ens: { registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      explorers: [
        { name: "etherscan", url: "https://etherscan.io", standard: "EIP3091" },
      ],
    },
  },
  "0x89": {
    rpcURL: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com",
    chainName: "Polygon",
    configs: {
      chainId: "0x89",
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
  },
  "0x38": {
    rpcURL: "https://bsc-dataseed.binance.org",
    blockExplorer: "https://bscscan.com",
    chainName: "BSC",
    configs: {
      chainId: "0x38",
      chainName: "Binance Smart Chain",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://bsc-dataseed.binance.org/"],
      blockExplorerUrls: ["https://bscscan.com/"],
    },
  },
  "0xa86a": {
    rpcURL: "https://api.avax.network/ext/bc/C/rpc",
    blockExplorer: "https://snowtrace.io",
    chainName: "Avalanche",
    configs: {
      chainId: "0xa86a",
      chainName: "Avalanche Mainnet",
      nativeCurrency: {
        name: "AVAX",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://snowtrace.io"],
    },
  },
  "0xfa": {
    rpcURL: "https://rpc.ftm.tools/",
    blockExplorer: "https://ftmscan.com",
    chainName: "Fantom",
    configs: {
      chainId: "0xfa",
      chainName: "Fantom Opera",
      nativeCurrency: {
        name: "FTM",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: ["https://rpcapi.fantom.network/"],
      blockExplorerUrls: ["https://ftmscan.com/"],
    },
  },
};
