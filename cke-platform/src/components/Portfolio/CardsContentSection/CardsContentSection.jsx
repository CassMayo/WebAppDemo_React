
import ProductCard from "./ProductCard.jsx/ProductCard"
import DropdownItem from "./DropdownItem/DropdownItem"
import FilterItem from "./FilterItem/FilterItem"


import "./CardsContentSection.css"
import data from "./CardsContent.json"
import { useState } from "react"

export default function CardsContentSection() {

    const [filter, setFilter] = useState([])
    const [filterDropDownMenuOpened, setFilterDropDownMenuOpened] = useState(false)

    const [sortingDropDownOpened, setSortingDropDownOpened] = useState(false)
    const [sortingMethod, setSortingMethod] = useState("Default Sorting")
    const allSortingMethods = ["Default Sorting", "Price Ascending", "Price Descending"]

    const categories = data.cards.map((card) => card.type)

    const toggleFromFilter = (filterItem) => {
        if (!filter.includes(filterItem)) {
            const newFilter = [...filter, filterItem]
            setFilter(newFilter)
        }
        else {
            const newFilter = filter.filter((category) => category != filterItem)
            setFilter(newFilter)
        }
    }

    const updateSortingMethod = (newMethod) => {
        setSortingMethod(newMethod)
    }


    function filterCards(filter, cards) {
        if (filter.length < 1) {
            return cards
        }
        else {
            return cards.filter((card) => filter.includes(card.type))
        }
    }


    function sortByChosenSortingMethod(cardA, cardB) {

        if (sortingMethod == "Price Ascending") return parseInt(cardA.price) - parseInt(cardB.price)
        if (sortingMethod == "Price Descending") return parseInt(cardB.price) - parseInt(cardA.price)

        return 0 // sort default if none are true. 
    }



    return (

        <div className="contentContainer">
            <div className="sortingAndFilterRow">
                <div className="dropDownMenu filterDropDown" onClick={() => { setFilterDropDownMenuOpened(!filterDropDownMenuOpened) }}>
                    <div className="dropDownMenuBox">
                        <p>Filter</p>
                        <div className="dropDownIcon">
                            {filterDropDownMenuOpened ? (<i className="fa-solid fa-caret-up"></i>) : <i className="fa-solid fa-caret-down"></i>}
                        </div>
                    </div>
                    <div className={`dropDownMenuItems ${filterDropDownMenuOpened ? 'active' : 'inactive'}`}>
                        <ul>
                            {categories.filter((category) => !filter.includes(category)).map((category, index) => <DropdownItem name={category} doOnClick={toggleFromFilter} filter={filter} key={index} />)}
                        </ul>
                    </div>
                </div>

                <div className="dropDownMenu sortingDropDown" onClick={() => { setSortingDropDownOpened(!sortingDropDownOpened) }}>
                    <div className="dropDownMenuBox">
                        <p>Sort by: {sortingMethod}</p>
                        <div className="dropDownIcon">
                            {sortingDropDownOpened ? (<i className="fa-solid fa-caret-up"></i>) : <i className="fa-solid fa-caret-down"></i>}
                        </div>
                    </div>
                    <div className={`dropDownMenuItems ${sortingDropDownOpened ? 'active' : 'inactive'}`}>
                        <ul>
                            {allSortingMethods.filter((method) => method != sortingMethod).map((method, index) => <DropdownItem name={method} doOnClick={updateSortingMethod} key={index} />)}
                        </ul>
                    </div>
                </div>




                <div className="activeFiltersDiv">
                    {filter.map((filterName, index) => <FilterItem name={filterName} key={index} removeFilter={toggleFromFilter} />)}
                </div>
            </div>



            <div className="cardsContainer">

                {filterCards(filter, data.cards).sort(sortByChosenSortingMethod).map((card, index) =>
                    <ProductCard
                        image={card.image}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        type={card.type}
                        credits={card.credits}
                        price={card.price}
                        location={card.location}
                        description={card.description}
                        key={index}
                    />
                )}
            </div>
        </div>
    )
}


