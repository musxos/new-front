import Section from "../components/Section";
import WalletInfo from "../components/WalletInfo";
import { chainConfigs } from "../utils/chainConfigs";

export default function index() {
  return (
    <section>
      <WalletInfo />

      <div className="mt-5">
        {chainConfigs.map(({ chainName, chainId }) => (
          <Section key={chainId} chainId={chainId} chainName={chainName} />
        ))}
      </div>
    </section>
  );
}
