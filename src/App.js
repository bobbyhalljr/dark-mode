import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from 'react-router-dom'; 

import TopTenCoins from "./components/TopTenCoins";
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';

const App = () => {
    const [coinData, setCoinData] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => {
          console.log(res.data)
          setCoinData(res.data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <Navbar coinData={coinData} />
            {/* <Charts coinData={coinData} /> */}

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/top10' render={props => <TopTenCoins coinData={coinData} />}/>
        </div>
    );
  };

  export default App;