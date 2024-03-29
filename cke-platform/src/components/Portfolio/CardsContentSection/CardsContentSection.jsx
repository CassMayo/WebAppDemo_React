import ProductCard from "./ProductCard.jsx/ProductCard"
import DropdownItem from "./DropdownItem/DropdownItem"
import FilterItem from "./FilterItem/FilterItem"


import "./CardsContentSection.css"
import data from "./CardsContent.json"
import { useState } from "react"

export default function CardsContentSection() {

    const [filter, setFilter] = useState([])
    const [dropDownMenuOpened, setDropDownMenuOpened] = useState(false)

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


    return (

        <div class="contentContainer">

            <div className="filterContainer">
                <div className="dropDownMenu" onClick={() => { setDropDownMenuOpened(!dropDownMenuOpened) }}>
                    <div className="dropDownMenuBox">
                        <p>Filter</p>
                        {dropDownMenuOpened ? (<i class="fa-solid fa-caret-up"></i>) : <i class="fa-solid fa-caret-down"></i>}
                        
                    </div>
                    <div className={`dropDownMenuItems ${dropDownMenuOpened ? 'active' : 'inactive'}`}>
                        <ul>
                            {categories.map((category, index) => <DropdownItem name={category} addFilter={toggleFromFilter} filter={filter} key={index} />)}
                        </ul>
                    </div>

                </div>

                <div className="activeFiltersDiv">
                    {filter.map((filterName, index) => <FilterItem name={filterName} key={index} removeFilter={toggleFromFilter} />)}
                </div>
            </div>



            <div className="cardsContainer">

                {filterCards(filter, data.cards).map((card, index) =>
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

function filterCards(filter, cards) {
    if (filter.length < 1) {
        return cards
    }
    else {
        return cards.filter((card) => filter.includes(card.type))
    }
}