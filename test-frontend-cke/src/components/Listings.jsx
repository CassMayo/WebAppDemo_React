import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listing = (props) => (

    <div>
        <ul>
            <li>{props.listing.title}</li>
            <li>{props.listing.price}</li>
            <li>{props.listing.credits}</li>
        </ul>

        <div>
            <Link to={`/edit/${props.listing._id}`}>
                Edit
            </Link>

            <button onClick={() => { props.deleteListing(props.listing._id) }}>
                delete listing
            </button>
        </div>
    </div>
)

export default function Listings() {

    const [listings, setListings] = useState([])

    useEffect(() => {
        async function getListings() {
            const response = await fetch(`http://localhost:5050/listings/`)
            if (!response.ok) {
                const msg = `An error occured: ${response.statusText}`
                console.error(msg)
                return
            }
            const listings = await response.json()
            setListings(listings)
        }
        getListings()
        return
    }, [listings.length])

    async function deleteListing(id) {
        await fetch(`http://localhost:5050/listings/${id}`, {
            method: "DELETE"
        })
        const newListings = listings.filter((el) => el._id != id)
        setListings(newListings)
    }

    function listListings() {
        return listings.map((listing) => {
            return (
                <Listing
                    listing={listing}
                    deleteListing={() => deleteListing(listing._id)}
                    key={listing._id}
                />
            )
        })
    }


    return (
        <div>
            {listListings()}
        </div>
    )
}