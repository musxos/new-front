import { useEffect, useRef } from "react";
import { Web3UserContext } from "../context";
import { TYPES } from "../context/reducer";

export const useOnAppLoad = () => {
  const { initializePackages } = Web3UserContext();

  useEffect(() => {
    initializePackages();
    // eslint-disable-next-line
  }, []);
};

/**
 * @dev it will listen to provder events and update the states.
 * @returns void
 */
export const useOnProviderChange = () => {
  const {
    dispatch,
    getNetworkInfo,
    contextState: { provider },
  } = Web3UserContext();

  useEffect(() => {
    provider &&
      (() => {
        // Subscribe to accounts change

        provider.on("accountsChanged", (accounts) => {
          if (accounts && accounts.length)
            return dispatch({
              type: TYPES.UPDATE_STATE,
              payload: { account: accounts[0], isWalletConnected: true },
            });
          dispatch({
            type: TYPES.UPDATE_STATE,
            payload: {
              account: null,
              isWalletConnected: false,
            },
          });
        });

        provider.on("chainChanged", getNetworkInfo);

        getNetworkInfo();
      })();

    // eslint-disable-next-line
  }, [provider]);
};

// checks the wallet connection status and update state if wallet is connected on page refresh
export const useCheckWalletConnection = () => {
  const hasBeenChecked = useRef(false);

  const {
    walletConnect,
    contextState: { web3PackagesLoaded },
  } = Web3UserContext();

  useEffect(() => {
    const isConnected = localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");
    if (web3PackagesLoaded && isConnected && !hasBeenChecked.current) {
      walletConnect();
      hasBeenChecked.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3PackagesLoaded]);
};
