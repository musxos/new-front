import { Web3UserContext } from "../context";
import { shortenAddress } from "../utils/constants";
import icon from "../assets/images/copy-icon.svg";

export default function WalletInfo() {
  const {
    contextState: { account, isWalletConnected },
  } = Web3UserContext();
  return (
    <>
      <div className="body-box">
        <div className="body-account-info-box">
          <h2 className="name-title">Wallet Information</h2>
          <div className="wallet-flex-box">
            {isWalletConnected && (
              <>
                <p className="wallet-number mb-1">
                  {shortenAddress(account)}
                  &nbsp;&nbsp;
                  <picture>
                    <img className="wallet-copy-icon" src={icon.src} alt="" />
                  </picture>
                </p>
              </>
            )}

            {!isWalletConnected && <p>Please connect your wallet.</p>}
          </div>
          <button className="example-btn">Follow</button>
        </div>
      </div>
    </>
  );
}
