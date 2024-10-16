import "./index.css";
const Tokenomics = () => {
  return (
    <div id="tokenomics" className="t-cont">
      <h1 className="t-head">Tokenomics</h1>
      <div className="t-img-cards-cont">
        <img
          className="t-img"
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728984514/Donut_paxqwr.svg"
          alt="svg"
        />
        <div className="t-cards-cont">
          <ul className="t-ul">
            <li className="t-li">
              <p className="t-li-head">Name </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> EtnAi
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Token Name </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> $EtnAi
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Token Standard</p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span>ERC20
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Block chain </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> Ethereum
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Total Supply </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> 100 Million
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Tax </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> 5%/5%
              </p>
            </li>
          </ul>
          <ul className="t-ul">
            <li className="t-li">
              <p className="t-li-head">Team </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> 35%
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Marketing </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> 5%
              </p>
            </li>
            <li className="t-li">
              <p className="t-li-head">Liquidity </p>
              <p className="t-li-para">
                <span className="t-li-para-span">:</span> 90%
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
