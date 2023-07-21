const Content = (props) => {
    console.log(props, "test")
    return (<div> < h1 > {props.ourcontent} {props.secondcontent} </h1 > <h1>{props.thirdContent} {props.fourthContent}</h1> <h1>{props.fifthContent} {props.lastContent}</h1>
    </div>)
}
export default Content