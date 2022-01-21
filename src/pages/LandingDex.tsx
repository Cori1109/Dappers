import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import "../styles/LandingDex.css";

const LandingDexContainer = styled.div`
  background-color: #14262b;
`;

const LandingDex: React.FunctionComponent = () => {
  return (
    <LandingDexContainer>
      <div className="main">
        <div className="welcomeDiv">
          <div className="welcomeInside">
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
                  src="discord-icon.png"
                  alt="Discord Icon"
                  width={36}
                  height={36}
                />
              </a>
              <a href="#">
                <img
                  src="twitter-icon.png"
                  alt="Twitter Icon"
                  width={40}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="builtStep">
          <a href="/buildDex" className="dexCard">
            <div>Build your DEX</div>
          </a>
          <a href="#" className="tokenCard">
            <div>Create a token</div>
          </a>
          <a href="#" className="liquidCard">
            <div>Provide liquidity</div>
          </a>
          <a href="#" className="tradingCard">
            <div>Stake and earn</div>
            <div>APR</div>
          </a>
        </div>

        <div className="builtDiv">
          <div className="cardDiv">
            <div className="builtTitle">
              A growing ecosystem of decentralized exchanges built with
              Dextimize.
            </div>
            <p>Learn more</p>
          </div>
          <div className="inbuiltDiv">
            <div className="builtRec">
              <div className="builtImg">
                <img src="icons-lightning.png" alt="Lightning Icon" />
              </div>
              <div className="builtText">
                <div className="subTitle">Build fast</div>
                <div className="subText">
                  Create a functioning DEX in a few easy steps
                </div>
              </div>
            </div>
            <div className="builtRec">
              <div className="builtImg">
                <img src="icons-creativity.png" alt="Creativity Icon" />
              </div>
              <div className="builtText">
                <div className="subTitle">Build smart</div>
                <div className="subText">
                  Token and liquidity functions streamlined so you can bring
                  your idea to life
                </div>
              </div>
            </div>
            <div className="builtRec">
              <div className="builtImg">
                <img src="icons-crowdfunding.png" alt="Crowdfunding Icon" />
              </div>
              <div className="builtText">
                <div className="subTitle">Expand</div>
                <div className="subText">Build upon your initial DEX</div>
              </div>
            </div>
          </div>
        </div>
        <div className="communityDiv">
          <div className="incomDiv">
            <div className="commTitle">Discover the Dextimize community</div>
            <div className="commText">
              Build, earn, learn, favorite, and explore with Dextimize. Connect
              with us on Twitter, Discord, and Instagram and visit #dextimize
              for inspiration.
            </div>
          </div>
          <div className="incomeDiv">
            <img src="backgrounds/bg3.png" />
          </div>
        </div>
        <div className="browseDiv">
          <div className="browseContent">
            <div className="browseTitle">
              Browse and search DEX built with the Dextimize ecosystem
            </div>
            <div className="browseText">
              Build something cool with Dextimize? Enable public view on your
              DEX to feature your work here.
            </div>
          </div>
          <div className="searchDiv">
            <input type="text" placeholder="Search" className="searchInput" />
            <button className="searchBtn">New</button>
            <button className="searchBtn">Most viewed</button>
            <button className="searchBtn">
              Add filter
              <FaIcons.FaPlusCircle />
            </button>
          </div>
        </div>
        <div className="sitesDiv">
          <div className="sitesCard">
            <div className="avatarCard">
              <img src="icons-Aave.png" />
              <span className="badgeSpan">Dapp</span>
            </div>
            <div className="sitesText">
              Aave
              <p>Earn interest by depositing and borrowing assets.</p>
            </div>
          </div>
          <div className="sitesCard">
            <div className="avatarCard">
              <img src="icons-1inch.png" />
              <span className="badgeSpan">Aggregator</span>
            </div>
            <div className="sitesText">
              1inch
              <p>DeFi/DEX aggregator.</p>
            </div>
          </div>
          <div className="sitesCard">
            <div className="avatarCard">
              <img src="icons-Status.png" />
              <span className="badgeSpan">Dapp</span>
            </div>
            <div className="sitesText">
              Status
              <p>Secure messaging app, wallet, and web3 browser.</p>
            </div>
          </div>
          <div className="sitesCard">
            <div className="avatarCard">
              <img src="icons-Futureswap.png" />
              <span className="badgeSpan">Dapp</span>
            </div>
            <div className="sitesText">
              Futureswap
              <p>Decentralized trading protocol for perpetual swaps.</p>
            </div>
          </div>
          <div className="sitesCard">
            <div className="avatarCard">
              <img src="icons-Zerion.png" />
              <span className="badgeSpan">Tool</span>
            </div>
            <div className="sitesText">
              Zerion
              <p>Build and manage your DeFi portfolio in one place.</p>
            </div>
          </div>
          <div className="sitesCard">
            <div className="avatarCard">
              <img src="icons-Aloe.png" />
              <span className="badgeSpan">Dapp</span>
            </div>
            <div className="sitesText">
              Aloe
              <p>Active liquidity provision solution for advanced AMMs.</p>
            </div>
          </div>
        </div>
        <div className="futureDiv">
          <div className="shadowDiv">
            <div className="futureTitle">
              The easiest and quickest way to launch your DEX
            </div>
            <div className="futureText">
              Dextimize is the first generative platform to streamline launching
              your own DEX. You can customize and create your own exchange in a
              matter of minutes
            </div>
          </div>
        </div>
      </div>
    </LandingDexContainer>
  );
};

export default LandingDex;
