import React, { useState, useEffect } from "react";
import HeaderWhite from "../components/HeaderWhite";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResult = () => {
  console.log(useLocation().search); // useLocation().search는 토큰 발급을 위한 코드를 가져오려는 작업.
  const { code } = queryString.parse(useLocation().search);
  const [accessToken, setaccessToken] = useState("토큰을 받기 전입니다.");
  const [userSeqNo, setuserSeqNo] = useState("사용자 번호");
  console.log(code);

  useEffect(() => { //이 페이지에 최초로 접속했을 때
    getAccessToken();
  }, []);

  const getAccessToken = () => {
    const sendData = {
      code: code,
      client_id: "7d76ef3b-5272-464f-b8a1-22b6d45062e5",
      //아진짜 ㅈㄴ빡친다 여기서 2시간 고민했는데
      //cilent_id: "7d76ef3b-5272-464f-b8a1-22b6d45062e5", 스펠링이 틀렸었네 cilent이지랄ㅋㅋ
      client_secret: "1b895c03-4f13-49c6-8df9-0415089e5297",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    const encodedData = queryString.stringify(sendData);

    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: encodedData,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      if (data.rsp_code === "O0001") {
        alert(data.rsp_message);
      } else {
        const accessToken = data.access_token;
        const userSeqNo = data.user_seq_no;
        setaccessToken(accessToken);
        setuserSeqNo(userSeqNo);
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
      }
    });
  };

  return (
    <div>
      <HeaderWhite title={"AccessToken 요청"}></HeaderWhite>
      <p>인증코드 : {code}</p>
      <p>AccessToken : {accessToken}</p>
      <p>사용자번호 : {userSeqNo}</p>
      <button onClick={getAccessToken}>토큰 요청</button>
    </div>
  );
};

export default AuthResult;
