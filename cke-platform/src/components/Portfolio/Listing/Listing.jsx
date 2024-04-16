import './Listing.css';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomLink from '../../Navbar/CustomLink';
import { PurchaseContext } from '../../logic/PurchaseContext';
// import data from '../CardsContentSection/CardsContent.json'; 
import { BASE_API_URL } from '../../../config';

export default function Listing() {
    const [listing, setListing] = useState({
        title: '',
        price: '',
        credits: '',
        type: '',
        imageUrl: '',
        imageAlt: '',
        location: '',
        description: '',

        ownerId: '', // same id as logged in user so we can link up who owns what..
        ownerName: '',
    }
    );
    const [amount, setAmount] = useState(10);
    const navigate = useNavigate();
    const { addPurchasedItem } = useContext(PurchaseContext);
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined

            if (!id) return

            const response = await fetch(
                `${BASE_API_URL}/portfolio/${id}`
            )
            if (!response.ok) {
                const msg = `⚠️ An error has occured: ${response.statusText}`
                console.error(msg)
                return
            }

            const listing = await response.json()
            if (!listing) {
                console.warn(`Listing with id: ${id} not found`)
                navigate("/")
                return
            }
            setListing(listing)
        }
        fetchData()
        return
    }, [])

    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value));
    };

    

    const handlePurchase = () => {
        const id = params.id?.toString() || undefined

        const purchasedItem = { id, listing, amount };
        addPurchasedItem(purchasedItem);

        subtractCreditsFromListing(id, amount)

        navigate('/certificate');
    };

    const subtractCreditsFromListing = async (id, amount) => {

        try {

            const updatedListing = listing
            updatedListing.credits = updatedListing.credits - amount

            const response = await fetch(`${BASE_API_URL}/portfolio/${id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedListing)
              })
        } catch (err){
            console.error(err)
        }

    }


    return (
        <div className='listingBody'>
            <div className='exitRow'>
                <CustomLink to={"/portfolio"}>
                    <button className="goBackButton"> <i className="fa-solid fa-arrow-left"></i> Go back</button>
                </CustomLink>
            </div>

            <div className='titleRow'>
                <h1 className='companyTitle'>{listing.title}</h1>
                <div className='subheading'>{listing.ownerName + " | " + listing.location}</div>
            </div>

            <div className='bodyDiv'>
                <div className='Images' style={{ backgroundImage: `url( ${listing.imageUrl} )` }}></div>
                <div className='listingInfo'>
                    <div className='buyBox'>
                        <div className='listingMainInfo'>
                            <div className='price mainInfo'>
                                <p className='mainInfoTitle'>{listing.price}</p>
                                <p className='mainInfoDescription'>per credit</p>
                            </div>
                            <div className='credits mainInfo'>
                                <p className='mainInfoTitle'>{listing.credits}</p>
                                <p className='mainInfoDescription'>credits available</p>
                            </div>
                        </div>
                        <div className='interactions'>
                            <div className='chooseAmount'>
                                <input type="number" onChange={handleAmountChange} defaultValue={amount} max={listing.credits} className='chooseAmountInputBox interaction' />
                            </div>
                            <div className='buy'>
                                <button onClick={handlePurchase} className='buyButton interaction'>Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{listing.description}</p>
                    </div>
                    <div className='verifications'>todo verifications. Show verification logos based on json</div>
                </div>
            </div>
        </div>
    );
}
