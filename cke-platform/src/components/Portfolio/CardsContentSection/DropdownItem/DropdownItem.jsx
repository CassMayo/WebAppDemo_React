
import "./DropdownItem.css"

export default function DropdownItem(props) {
    return (
        <div className="dropdownItemContainer" onClick={() => props.doOnClick(props.name)}>
            <p>{props.name}</p>

            {/*props.filter.includes(props.name) && <i className="fa-solid fa-check"></i>*/}
        </div>
    )
}