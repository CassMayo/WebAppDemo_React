import { useEffect, useState } from "react";

import ProductCard from "./ProductCard.jsx/ProductCard";
import DropdownItem from "./DropdownItem/DropdownItem";
import FilterItem from "./FilterItem/FilterItem";
import SearchComponent from "./SearchComponent/SearchComponent";
import { BASE_API_URL } from '../../../config';

import "./CardsContentSection.css";


import axios from 'axios'

export default function CardsContentSection() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getListings() {
            const response = await fetch(`${BASE_API_URL}/portfolio/`)
            if (!response.ok) {
                const msg = `An error occured: ${response.statusText}`
                console.error(msg)
                return
            }
            const listings = await response.json()
            setData(listings)
        }
        getListings()
        return
    }, [data.length])





    const [filter, setFilter] = useState([]);
    const [filterDropDownMenuOpened, setFilterDropDownMenuOpened] = useState(false);

    const [sortingDropDownOpened, setSortingDropDownOpened] = useState(false);
    const [sortingMethod, setSortingMethod] = useState("Default Sorting");

    const [searchQuery, setSearchQuery] = useState("");

    //Fikset her så at det ikke er duplicates av kategorier i filteret
    const categories = [...new Set(data.map(card => card.type))];

    const allSortingMethods = ["Default Sorting", "Price Ascending", "Price Descending", "Available Credits Ascending", "Available Credits Descending"];

    const toggleFromFilter = (filterItem) => {
        //endret litt her, funker akkurat det samme bare syntax forskjell
        const newFilter = filter.includes(filterItem) ? filter.filter((category) => category !== filterItem) : [...filter, filterItem];
        setFilter(newFilter);
    };

    const updateSortingMethod = (newMethod) => {
        setSortingMethod(newMethod);
    };

    //basically bare putta inn search sammen med filter så at det begge blir returnert
    function filterAndSearchCards() {
        return data
            .filter(card => filter.length < 1 || filter.includes(card.type)) // filter based on "filter type" 
            .filter(card => !searchQuery || card.title.toLowerCase().includes(searchQuery.toLowerCase())) // hide card that doesnt match search term
            .filter(card => card.credits > 0) // hide card that has 0 credits left in stock
    }

    function sortByChosenSortingMethod(cardA, cardB) {
        if (sortingMethod === "Price Ascending") return parseInt(cardA.price) - parseInt(cardB.price);
        if (sortingMethod === "Price Descending") return parseInt(cardB.price) - parseInt(cardA.price);
        if (sortingMethod === "Available Credits Ascending") return parseInt(cardA.credits) - parseInt(cardB.credits)
        if (sortingMethod === "Available Credits Descending") return parseInt(cardB.credits) - parseInt(cardA.credits)

        return 0; // sort default if none are true.
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    };


    return (

        <div className="contentContainer">
            <div className="sortingAndFilterRow">


                <SearchComponent className="search-container" onSearch={handleSearch} />


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
                            {allSortingMethods.map((method, index) => <DropdownItem name={method} doOnClick={updateSortingMethod} key={index} className={`${sortingMethod == method ? 'chosenSortingMethod' : "notChosenSortingMethod"} activeSortingMethod`} />)}
                        </ul>
                    </div>
                </div>


                <div className="activeFiltersDiv">
                    {filter.map((filterName, index) => <FilterItem name={filterName} key={index} removeFilter={toggleFromFilter} />)}
                </div>
            </div>



            <div className="cardsContainer">
                {/*Ikke ideelt mens siden vi ikke har backend... >-< bør egentlig ha error og bruke error state*/}


                {filterAndSearchCards().sort(sortByChosenSortingMethod).length === 0 ? (
                    <p className="no-cards-found">No credit found with given parameters <br /><br />
                        filters: [{filter}]<br />
                        search query: {searchQuery ? searchQuery : "No search made"} <br />
                        sorting: {sortingMethod}

                    </p>
                ) : (
                    filterAndSearchCards()
                        .sort(sortByChosenSortingMethod)
                        .map((card, index) => (
                            <ProductCard
                                imageUrl={card.imageUrl}
                                imageAlt={card.imageAlt}
                                title={card.title}
                                type={card.type}
                                credits={card.credits}
                                price={card.price}
                                location={card.location}
                                description={card.description}
                                key={index}
                                id={card._id}
                            />
                        ))
                )}


            </div>
        </div>
    )
}