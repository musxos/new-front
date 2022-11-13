import { Web3UserContext } from "../context";

export default function WalletButton() {
  const {
    walletConnect,
    disconnectWallet,
    contextState: { isWalletConnected },
  } = Web3UserContext();

  const handleButtonClick = () => {
    if (isWalletConnected) return disconnectWallet();
    walletConnect();
  };

  return (
    <div className="header-connect-button-box">
      <button className="header-connect-button" onClick={handleButtonClick}>
        <svg
          className="header-connect-button-icon"
          style={{ enableBackground: "new 0 0 74 74" }}
          viewBox="0 0 74 74"
        >
          <g>
            <path
              className="st0"
              d="M64.4,17.3h-4.3L51.2,2c-0.3-0.5-0.8-0.8-1.3-0.9c-0.5-0.1-1.1,0-1.6,0.3L38.1,8.4l-5.5-6.7   C32.3,1.3,31.8,1,31.2,1c-0.6,0-1.1,0.2-1.5,0.6L14.2,17.3H9.6c-4.3,0-7.8,3.5-7.8,7.8v40c0,4.3,3.5,7.8,7.8,7.8h54.8   c4.3,0,7.8-3.5,7.8-7.8v-40C72.2,20.8,68.7,17.3,64.4,17.3z M68.2,52.9H55.5c-4.3,0-7.8-3.5-7.8-7.8s3.5-7.8,7.8-7.8h12.7V52.9z    M48.8,5.9l6.7,11.4H45.3l-4.7-5.7L48.8,5.9z M31,6l9.2,11.3H19.8L31,6z M64.4,69H9.6c-2.1,0-3.8-1.7-3.8-3.8v-40   c0-2.1,1.7-3.8,3.8-3.8h54.8c2.1,0,3.8,1.7,3.8,3.8v8.2H55.5c-6.5,0-11.8,5.3-11.8,11.8S49,56.9,55.5,56.9h12.7v8.2   C68.2,67.3,66.5,69,64.4,69z"
            />
            <circle className="st0" cx="55.8" cy="45.1" r="2.9" />
          </g>
        </svg>
        <span className="header-connect-button-text">
          {isWalletConnected && "Disconnect"}
          {!isWalletConnected && "Connect Wallet"}
        </span>
      </button>
    </div>
  );
}
