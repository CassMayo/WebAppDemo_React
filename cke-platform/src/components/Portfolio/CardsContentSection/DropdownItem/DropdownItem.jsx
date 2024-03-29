
import "./DropdownItem.css"

export default function DropdownItem(props) {
    return (
        <div className="dropdownItemContainer" onClick={() => props.addFilter(props.name)}>
            <p>{props.name}</p>
            {props.filter.includes(props.name) && <i class="fa-solid fa-check"></i>}
        </div>
    )
}