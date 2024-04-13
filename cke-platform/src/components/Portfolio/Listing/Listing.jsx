import './Listing.css';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomLink from '../../Navbar/CustomLink';
import { PurchaseContext } from '../../logic/PurchaseContext';
import data from '../CardsContentSection/CardsContent.json'; 

export default function Listing() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [amount, setAmount] = useState(10);
    const navigate = useNavigate();
    const { addPurchasedItem } = useContext(PurchaseContext);
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined
            if (!id) return
            const response = await fetch(
                `http://localhost:5050/portfolio/${id}`
            )
            if (!response.ok) {
                const msg = `An error has occured: ${response.statusText}`
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
    }, [params.id, navigate])

    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value));
    };

    const handlePurchase = () => {
        const purchasedItem = { id, listing, amount };
        addPurchasedItem(purchasedItem);
        navigate('/certificate');
    };

    if (!listing) {
        return <div className='loading'> Loading or no listing found...</div>;
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
                <div className='subheading'>{listing.title + " | " + listing.location}</div>
            </div>

            <div className='bodyDiv'>
                <div className='Images' style={{ backgroundImage: `url( ${listing.image} )` }}></div>
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
                                <input type="number" onChange={handleAmountChange} defaultValue={amount} className='chooseAmountInputBox interaction' />
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
