import {
  useCheckWalletConnection,
  useOnAppLoad,
  useOnProviderChange,
} from "./web3.hooks";

export default function HooksWrapper() {
  useOnAppLoad();
  useOnProviderChange();
  useCheckWalletConnection();
  return null;
}
