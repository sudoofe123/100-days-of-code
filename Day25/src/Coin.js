import React from "react";

const Coin = ({ name, icon, price, symbol, websiteUrl }) => {
  return (
    <div className="coin">
      <h1>Name :{name}</h1>
      <img src={icon} alt={name} />
      <h3>Price:{price}</h3>
      <h3>Symbol:{symbol}</h3>
      <h3>
        WebsiteUrl:<a href="">{websiteUrl}</a>
      </h3>
    </div>
  );
};

export default Coin;
