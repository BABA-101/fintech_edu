import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
border-bottom: 1px solid black;
text-align: center;
padding:20px;
font-size:20px;
font-weight:bold;
background-color:blue; //vscode-styled-components 확장
`;

const HeaderWhite = (props) => {
    return <HeaderBlock>{props.title}</HeaderBlock>
};
export default HeaderWhite;