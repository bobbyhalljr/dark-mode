import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';

const Coins = () => {
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
                        // extra={[
                        //     <Button key="1" type="primary">
                        //     {`view ${coin.name}`}
                        //     </Button>,
                        // ]}
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
                            <Button className='btn' key="1" type="primary">
                            {`view ${coin.name}`}
                            </Button>
                        </Row>
                    </PageHeader>
                )
            })}
        </div>
    )
}

export default Coins;