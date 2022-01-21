import React from "react";
import styled from "styled-components";
import "../styles/BuildDex.css";

import { FiChevronDown } from "react-icons/fi";

const getThemeImgURL = (index: number) => {
  let urlStr = "themes/theme" + index.toString() + ".png";
  return urlStr;
};

const ThemeContainer = (index: number) => {
  return (
    <button className="themeDiv">
      <img src={getThemeImgURL(index)} width={77} height={80} />
      <p>Theme{index}</p>
    </button>
  );
};

const SelectDiv = (placeholder: string) => {
  return (
    <div className="chainDiv">
      <p>{placeholder}</p>
      <div>
        <FiChevronDown />
      </div>
    </div>
  );
};

const BuildDex: React.FunctionComponent = () => {
  return (
    <div className="buildDex">
      <div className="buildMain">
        <div className="launchImg">
          <div className="launchText">Launch your DEX</div>
          <div className="launchSubText">
            Complete these steps to launch your decentralized exchange
          </div>
        </div>
        <div className="launchContainer">
          <div className="leftDiv">
            <div className="launchDiv">
              <div className="launchContent">
                <p>Select your template</p>
                <div className="templateDiv">
                  {ThemeContainer(1)}
                  {ThemeContainer(2)}
                  {ThemeContainer(3)}
                  {ThemeContainer(4)}
                </div>
              </div>
              <div className="launchContent">
                <p>Select your blockchain</p>
                {SelectDiv("Ethereum")}
              </div>
            </div>
            <div className="launchDiv">
              <div className="launchContent">
                <p>Customize your theme</p>
                <div className="templateDiv">
                  <div className="selTheme">
                    <p>Selected theme</p>
                    {ThemeContainer(5)}
                  </div>
                  <div className="subContent">
                    <input
                      type="text"
                      className="inputTxt"
                      placeholder="Domain name"
                    />
                    <input
                      type="text"
                      className="inputTxt"
                      placeholder="Color"
                    />
                  </div>
                </div>
              </div>
              <div className="launchContent">
                <p>Main token</p>
                <div className="templateDiv">
                  <div className="subContent">
                    <div className="radioBox">
                      <input
                        type="radio"
                        id="extToken"
                        name="token"
                        value="extToken"
                        checked
                      />
                      <label htmlFor="extToken">Address</label>
                    </div>
                    <div className="noPadding">
                      <div className="radioBox">
                        <input
                          type="radio"
                          id="newToken"
                          name="token"
                          value="newToken"
                        />
                        <label htmlFor="newToken">Create token</label>
                      </div>
                      <div className="flexDiv">
                        <input
                          type="text"
                          className="inputTxt"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          className="inputTxt"
                          placeholder="Token supply"
                        />
                        <input
                          type="text"
                          className="inputTxt"
                          placeholder="Symbol"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="launchDiv">
              <div className="launchContent">
                <p>Pool</p>
                <div className="templateDiv">
                  <div className="subContent">
                    <div className="flexDiv">
                      <div className="subContent">
                        <p>Token1</p>
                        {SelectDiv("ETH")}
                      </div>
                      <div className="subContent">
                        <p>Token2</p>
                        {SelectDiv("BNB")}
                      </div>
                    </div>
                    <div className="flexDiv">
                      <p>Amount</p>
                      <input type="text" className="inputTxt" />
                      <input type="text" className="inputTxt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="launchContent">
                <p>Parameter</p>
                <div className="templateDiv">
                  <div className="subContent">
                    <div className="flexDiv">
                      <p>Swap fee (%)</p>
                      <input type="text" className="inputTxt" />
                    </div>
                    <div className="flexDiv">
                      <p>Emit per block</p>
                      <input type="text" className="inputTxt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <button className="btnCreate">Create DEX</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildDex;
