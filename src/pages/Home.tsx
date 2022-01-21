import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { FiMail, FiFacebook, FiTwitter, FiSlack } from "react-icons/fi";
import "../styles/Home.css";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #035c94;
`;

const HomeLandContainer = styled.div`
  margin-top: 38px;
  margin-right: 173px;
  width: 85vw;
  padding: 470px 0 0 88px;
  background-image: url("backgrounds/bg-home2.png");
  background-size: inherit;
  background-repeat: no-repeat;
  background-position-x: right;
  border-radius: 0.5rem;
  @media screen and (max-width: 760px) {
    margin: auto;
    margin-top: 50px;
    padding: 160px 20px 0 20px;
    background-size: contain;
    background-position-x: initial;
  }
`;

const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <HomeLandContainer>
        <div className="welcomeTitle">WEB 3.0 AT YOUR FINGERTIPS</div>
        <div className="description">
          We provide you the framework to jet speed your ideas.
        </div>
        <div className="linkDiv">
          <a href="#">
            <img
              src="github-icon.png"
              alt="Github Icon"
              width={36}
              height={36}
            />
          </a>
          <a href="#">
            <img
              src="/discord-icon.png"
              alt="Discord Icon"
              width={36}
              height={36}
            />
          </a>
          <a href="#">
            <img
              src="/twitter-icon.png"
              alt="Twitter Icon"
              width={40}
              height={36}
            />
          </a>
        </div>
      </HomeLandContainer>

      <div className="chooseDiv">
        <div>
          <div className="welTitle">CHOOSE FROM</div>

          <div className="chooseText">
            Launch your own decentralized crypto currency application.
          </div>
        </div>
        <div className="platformDiv">
          <a href="/landingdex">
            <img src="/dex-icon.png" alt="DexIcon" width={132} height={141} />
            <div>DEX</div>
          </a>
          <a href="/nftmarket">
            <img
              src="/nftmarket-icon.png"
              alt="NFTMarketIcon"
              width={132}
              height={141}
            />
            <div>NFT Market</div>
          </a>
          <a href="/cryptogame">
            <img
              src="/cryptogame-icon.png"
              alt="CryptoGame"
              width={132}
              height={141}
            />
            <div>Crypto Game</div>
          </a>
        </div>
      </div>
      <div id="contact">
        <div className="contactdiv">
          <div className="contactSub1">
            <div className="subtitle71">Contact Us</div>
            <div className="inputDiv">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Phone Number" />
              <textarea
                className="txtarea"
                placeholder="Your message here"
              ></textarea>
            </div>
            <button className="smsBtn">Send Message</button>
          </div>
          <div className="contactSub2">
            <div className="subtitle7">Visit Our Company</div>
            <div>
              <div className="rightSub">
                <div className="rightSub2">
                  <FaIcons.FaMapMarkerAlt />
                </div>
                <div className="rightIntro">
                  <div className="subtitle8">Suponic Token</div>
                  <span className="text7">
                    Dolfin RD, 23/A New Market, South Zone
                    <br />
                    Sandigo, USA.
                  </span>
                </div>
              </div>
              <div className="rightSub">
                <div className="rightSub2">
                  <FaIcons.FaPhoneAlt />
                </div>
                <div className="rightIntro">
                  <div className="subtitle8">Telephone Number</div>
                  <span className="text7">
                    +99 (123) 326 4029
                    <br />
                    +99 (123) 326 4029
                  </span>
                </div>
              </div>
              <div className="rightSub">
                <div className="rightSub2">
                  <FiMail />
                </div>
                <div className="rightIntro">
                  <div className="subtitle8">E-Mail Us</div>
                  <span className="text7">info@dappers.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
