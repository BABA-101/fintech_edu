import React from 'react'
import { useState, useEffect } from "react";
import HeaderWhite from '../components/HeaderWhite'
import axios from "axios";
import MainCard from "../components/Main/MainCard";


const MainPage = () => {
    useEffect(() => {
        getAccountList();
    }, []);

    const [accountList, setaccountList] = useState([]);

    const getAccountList = () => {
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");

        //# work7 사용자 정보 조회 api 통해, accountList에 계좌 목록을 저장. axois 사용
        //1. axios 요청 작성
        //get방식: url 데이터 지정/ data대신 params사용
        //2. setaccountList 실행

        console.log(userSeqNo);
        const sendData = {
            user_seq_no: userSeqNo,
            include_cancel_yn: "Y",
            sort_order: "D"
        };

        const option = {
            method: "GET",
            url: "/v2.0/user/me",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: sendData,
        };

        axios(option).then(({ data }) => {
            const accountListFromRequest = data.res_list;
            setaccountList(accountListFromRequest);
        });

    }

    return (
        <div>
            <HeaderWhite title={"메인페이지(계좌목록)"}></HeaderWhite>
            {accountList.map(({ fintech_use_num, bank_name }) => {
                return (
                    <MainCard
                        bankName={bank_name}
                        fintechUseNo={fintech_use_num}
                    ></MainCard>
                )
            })}
        </div >
    )
}

export default MainPage;