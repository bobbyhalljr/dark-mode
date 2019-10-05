import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';

import SingleCoin from '../components/SingleCoin';

const Coins = (props) => {
    const [coins, setCoins] = useState([])

    const getCoins = () => {
        Axios.get('https://api.coinpaprika.com/v1/tickers')
        .then(res => {
            console.log(res.data)
            setCoins(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        getCoins();
    }, [])

    const { match } = props;

    return (
        <div className='coin-container'>
            {coins.map(coin => {
                return (
                    <PageHeader
                        className='coins'
                        key={coin.id}
                        title={coin.name}
                        tags={<Tag color="blue">{`rank ${coin.rank}`}</Tag>}
                        subTitle={coin.symbol}
                        >
                        <Row type="flex">
                            <Statistic title="Market Cap" value={coin.quotes.USD.market_cap} />
                            <Statistic
                            title="Price"
                            prefix="$"
                            value={coin.quotes.USD.price.toFixed(2)}
                            style={{
                                margin: '0 32px',
                            }}
                            />
                            <Statistic title="Price change" prefix="$" value={coin.quotes.USD.percent_from_price_ath} />
                            <NavLink to={`/coins/${coin.id}`}>
                                <Button className='btn' key="1" type="primary">
                                    {/* <NavLink to={`/coins/${coin.id}`}> */}
                                        {`view ${coin.name}`}
                                    {/* </NavLink> */}
                                </Button>
                            </NavLink>
                        </Row>
                    </PageHeader>
                )
            })}

            <Route path='/coins/:id' render={props => <SingleCoin {...props} />} />
        </div>
    )
}

export default Coins;