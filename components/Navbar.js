import Link from "next/link";
import WalletButton from "./WalletButton";
import logo from "../assets/images/one-logo.svg";

export default function Navbar() {
  return (
    <header className="header-big-box">
      <div className="header-box">
        <div className="header-logo-box">
          <Link href="/">
            <picture>
              <img className="header-logo" src={logo.src} alt="" />
            </picture>
          </Link>
        </div>

        <WalletButton />
      </div>
    </header>
  );
}
