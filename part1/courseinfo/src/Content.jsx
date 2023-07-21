import Part from "./Part"

const Content = (props) => {
    console.log(props, "test")
    return (
        <div>
            <Part attr={props} />
        </div>
    )
}
export default Content