import Link from "next/link";
import { getNavigableURL } from "../utils/constants";
import imageIcon from "../assets/images/image-icon.svg";
import timeIcon from "../assets/images/time-icon.svg";

export function Card(props) {
  const { image, name, tokenId, chainId, contract } = props;
  const href = `${contract}/${chainId}/${tokenId}`;

  return (
    <div className="products-flex-box">
      <div className="one-of-product-box">
        <div className="pro-position for_left">
          <picture>
            <img className="position-icon" src={imageIcon.src} alt="" />
          </picture>
        </div>
        <div className="pro-position for_right">
          <svg className="heart-icon" viewBox="0 0 24 24" fill="none">
            <path
              className="st0"
              d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="heart-text">23</span>
        </div>
        <div className="product-flex-box">
          <div className="product-image-box">
            <picture>
              <video
                poster={getNavigableURL(image)}
                className="product-image"
                src={getNavigableURL(image)}
                alt={name}
                width="100%"
                autoPlay
                playsInline
                loop
              />
            </picture>
          </div>
          <div className="product-info-box">
            <div className="product-name-boxes">
              <p className="product-name">CloneF #1108</p>
              <p className="product-stock">78 in stock</p>
            </div>
            <div className="product-time-boxes">
              <div className="pro-traverse-button-box">
                <Link href={href} className="pro-traverse-button">
                  <span className="pro-traverse-button-text">Traverse</span>
                </Link>
              </div>
              <div className="pro-time-box">
                <picture>
                  <img className="pro-time-icon" src={timeIcon.src} alt="" />
                </picture>

                <span className="pro-time-text">2 hours left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
