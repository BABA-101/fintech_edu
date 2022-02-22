const Welcome = (props) => {
    console.log(props);
    return (
        <div>
            <div>hello, world!</div>
            <div>안녕? {props.username}!!</div>
            <div>나이: {props.age}</div> <br></br>
        </div>
    );
};
export default Welcome;