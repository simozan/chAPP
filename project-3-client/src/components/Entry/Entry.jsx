import "./Entry.css";
function Entry(props) {
const entryTotal = props.entryHour*props.entryEurosHour
    return (
        <div className="TableLine">
            <p className="Dimensions">{props.entryDate}</p>
            <p className="Dimensions">{props.entryClient.charAt(0).toUpperCase() + props.entryClient.slice(1)}</p>
            <p className="Dimensions">{props.entryEurosHour} €</p>
            <p className="Dimensions">{props.entryHour} h</p>
            <p className="Dimensions">{entryTotal} €</p>
        </div>
    )
}
export default Entry;