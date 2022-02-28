import React from 'react'
import HeaderWhite from '../components/HeaderWhite'
import axios from 'axios'

const AxiosTest = () => {
    const handleClick = () => {
        console.log("click");
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-01-28&sortBy=publishedAt&apiKey=f6d274f688364e2f939aa05697529612")
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <HeaderWhite title="Http 통신" ></HeaderWhite>
            <button onClick={handleClick}>데이터 요청하기</button>
        </div>
    )
}

export default AxiosTest;