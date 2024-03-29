import "./FilterItem.css"


export default function FilterItem(props){
    return(
        <div className="filterItemContainer" onClick={() => props.removeFilter(props.name)}>
            <p className="filterItemText">{props.name} <i class="fa-solid fa-xmark"></i></p>
        </div>
    )
}