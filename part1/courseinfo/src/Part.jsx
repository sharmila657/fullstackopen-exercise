const Part = ({attr}) => {
    console.log(attr,"part")
    return (<div> < h1 >{attr.ourcontent} {attr.secondcontent} </h1 > <h1>{attr.thirdContent} {attr.fourthContent}</h1> <h1>{attr.fifthContent} {attr.lastContent}</h1>
    </div>)
}
export default Part