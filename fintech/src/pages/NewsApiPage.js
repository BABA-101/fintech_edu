import React, { useState } from 'react'
import HeaderWhite from '../components/HeaderWhite'
import SearchInput from '../components/News/SearchInput'
import NewsList from '../components/News/NewsList'
import axios from "axios";

const NewsApiPage = () => {
    const [searchText, setSearchText] = useState("");
    const [searchResultList, setSearchResultList] = useState([]);

    const handleSearchTextChange = (e) => {
        //input--> search text에반영
        const { value } = e.target;
        console.log(value);
        setSearchText(value);
        console.log("searchText: ", searchText);
    };

    const handleSearchButtonClick = () => {
        //axios 통해 newsList 요청. searchInput 데이터를 news api 에 요청
        const searchApiUrl = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-02-01&sortBy=publishedAt&apiKey=f6d274f688364e2f939aa05697529612`;
        axios
            .get(searchApiUrl)
            .then((response) => {
                console.log(response);
                setSearchResultList(response.data.articles);
                console.log("뉴스 리스트 데이터는: ", searchResultList);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <HeaderWhite title="뉴스 검색"></HeaderWhite>
            <br></br>
            <center>
                <SearchInput
                    handleChange={handleSearchTextChange}
                    handleClick={handleSearchButtonClick}
                ></SearchInput>
            </center>
            <NewsList searchResultList={searchResultList}></NewsList>
        </div>
    )
}

export default NewsApiPage;