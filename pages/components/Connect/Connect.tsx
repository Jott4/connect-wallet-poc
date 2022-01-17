import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";

export interface ConnectProps {}

const Connect: React.FunctionComponent<ConnectProps> = ({}) => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return account ? (
    <div>
      <p className="text-white">
        Hello {etherBalance?._hex && etherBalance._hex}
      </p>
    </div>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={() => activateBrowserWallet()}
    >
      Connect Wallet
    </button>
  );
};

export default Connect;
