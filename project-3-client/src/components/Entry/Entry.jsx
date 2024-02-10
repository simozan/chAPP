import "./Entry.css";
function Entry(props) {
    return(<div>
        <p>{props.entryClient.charAt(0).toUpperCase()+props.entryClient.slice(1)}</p>
        <p>{props.entryQuantity}</p>
        <p>{props.entryDate}</p>
    </div>)
}
export default Entry;