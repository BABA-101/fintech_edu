import styled from 'styled-components'
const WelcomeBlock = styled.div`
    margin:20px;
    background-color:yellow;
    `

const Welcome = (props) => {
    console.log(props);
    return (
        <WelcomeBlock>
            <div>hello, world!</div>
            <div>안녕? {props.username}!!</div>
            <div>나이: {props.age}</div> <br></br>
        </WelcomeBlock>

    );
};
export default Welcome;