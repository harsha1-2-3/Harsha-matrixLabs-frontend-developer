import "./index.css";
const OurFeatures = () => {
  return (
    <div id="features" className="f-cont">
      <h1 className="f-head">Our Features </h1>
      <ul className="f-ul">
        <div className="f-li-top-cont">
          <li className="f-li f-li-trade">
            <img
              className="f-li-img"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728972238/Group_21_agyf39.png"
              alt="<>"
            />
            <h1 className="f-li-head">Trade Optimizer</h1>
            <p className="f-li-para">
              Find the right moments to buy or sell, with personalized trade
              suggestions designed to help you make the most of every
              opportunity.
            </p>
          </li>
          <div className="f-li-top-head-cont">
            <li className="f-li f-li-1 f-li-market">
              <h1 className="f-li-head">Market Insight</h1>
              <p className="f-li-para">
                Stay ahead of the market. Get real-time updates on market
                trends, track top traders' movements, and spot signals from key
                influencers.
              </p>
            </li>
            <li className="f-li f-li-big f-li-heading">Our Features</li>
          </div>

          <li className="f-li f-li-risk">
            <div className="f-li-risk-text">
              <h1 className="f-li-head">Risk Gaurd</h1>
              <p className="f-li-para">
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared for anything.
              </p>
            </div>
            <img
              className="f-li-img f-li-img-1"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728974560/Container_yud4ck.png"
              alt="risk gaurd"
            />
          </li>
        </div>
        <div className="f-li-bottom-cont">
          <li className="f-li f-li-2 f-li-portfolio">
            <h1 className="f-li-head">Portfolio Sync</h1>
            <p className="f-li-para">
              Easily manage your portfolio. You'll always know what you own, how
              it's performing, and where its headed.
            </p>
          </li>
          <li className="f-li f-li-3 f-li-opportunity">
            <h1 className="f-li-head">Opportunity Scout</h1>
            <p className="f-li-para">
              Find exciting new projects, events and tokens that others might be
              missing. Identifying promising opportunities early, so you never
              miss out on the next big thing.
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default OurFeatures;
