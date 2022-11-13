export const TYPES = {
  UPDATE_STATE: "UPDATE_STATE",
};
// state of the application
export const initialState = {
  account: null,
  isWalletConnected: false,
  connectedChainId: null,

  web3Modal: null,
  Web3: null,
  web3PackagesLoaded: false,

  web3Instance: null,
  provider: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case TYPES.UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
