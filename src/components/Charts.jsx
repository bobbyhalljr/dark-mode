import React, { useState, useEffect } from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className='charts-container'>
      <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} width='50' alt={coin.name} />
          </div>
          <h2 className='coin__current-price'>{coin.current_price}</h2>
          <h4 id='price' className='coin__price-negitive'>{coin.price_change_percentage_24h}</h4>
          {/* <Chart sparklineData={coin.sparkline_in_7d.price} /> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Charts;
