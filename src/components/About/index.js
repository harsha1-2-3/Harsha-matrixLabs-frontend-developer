import "./index.css";
const About = () => {
  return (
    <div id="about" className="a-cont">
      <div className="a-card">
        <h1 className="a-head">About EtnAi</h1>
        <p className="a-para">
          At Eth Ai, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className="a-btn">Read More</button>
      </div>
      <ul className="a-ul">
        <li className="a-li">
          <img
            className="a-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978588/graph_juvo75.svg"
            alt="a-li-img"
          />
          <h1 className="a-li-head">Stay Ahead</h1>
          <p className="a-li-para">
            No more guesswork—get clear, trustable insights.
          </p>
        </li>
        <li className="a-li">
          <img
            className="a-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978546/Vector_2_nq70qa.svg"
            alt="a-li-img"
          />
          <h1 className="a-li-head">Know Your Assets</h1>
          <p className="a-li-para">
            Always stay on top of how your investments are performing.
          </p>
        </li>
        <li className="a-li">
          <img
            className="a-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978327/Vector_1_aei7sn.svg"
            alt="a-li-img"
          />
          <h1 className="a-li-head">Simple, Not Overwhelming</h1>
          <p className="a-li-para">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </li>
        <li className="a-li">
          <img
            className="a-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978465/Future_Technology_cmqwd0.svg"
            alt="a-li-img"
          />
          <h1 className="a-li-head">Future-Proof</h1>
          <p className="a-li-para">
            We’re constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
