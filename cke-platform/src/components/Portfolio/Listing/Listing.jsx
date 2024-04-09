



import './Listing.css'
import data from '../CardsContentSection/CardsContent.json'
import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CustomLink from '../../Navbar/CustomLink';
import { PurchaseContext } from '../../logic/PurchaseContext';



export default function Listing() {


    const { id } = useParams()
    const [listing, setListing] = useState([])
    const [amount, setAmount] = useState(10)

    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value))
    }

    useEffect(() => {
        setListing(data.cards[id])
        console.log(listing)
    })

    /* allows us to navigate to other page using code */
    const navigate = useNavigate(); 
    /* Context handling for remembering bought items. Used to tell certificate what data to show */
    const { addPurchasedItem} = useContext(PurchaseContext)
    const handlePurchase = () => {
        const purchasedItem = {id, listing: listing, amount }
        addPurchasedItem(purchasedItem)
        navigate('/certificate')
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

                {/*TODO: swap with images carousel component? */}
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
                    <div className='description'> <p>Laboris non ex sunt ullamco tempor dolor aute in eiusmod ipsum anim enim qui laborum sit amet anim nostrud officia enim do qui veniam veniam commodo voluptate esse laborum dolore minim enim eu proident ea eu nostrud aute commodo laborum esse tempor ea labore ipsum deserunt fugiat do excepteur est aute labore magna anim consectetur non sint labore culpa irure aute quis amet consectetur sint minim laboris ipsum do sunt ipsum eiusmod labore ad id magna culpa amet aliqua incididunt sunt eu veniam aute eiusmod voluptate cillum laborum esse consectetur dolore sunt ad id ipsum reprehenderit nulla non laborum sunt voluptate ad aute laborum Lorem aliquip cupidatat anim quis incididunt anim aute reprehenderit Lorem sint laborum consectetur ullamco do laborum nulla enim deserunt irure nulla aliqua qui pariatur voluptate ut et commodo veniam exercitation aute et elit sunt nostrud incididunt incididunt laboris velit id nulla nulla eiusmod incididunt non ullamco pariatur ea amet amet qui nisi commodo eiusmod irure reprehenderit magna dolore amet esse elit tempor exercitation proident irure ex nulla occaecat tempor nulla minim consequat amet exercitation commodo est laborum laboris dolor commodo cillum amet ullamco occaecat enim cillum cillum consequat aliquip tempor quis dolor eu pariatur velit pariatur <br /><br /> Visit their site or read more here</p></div>
                    <div className='verifications'>todo verifications. Show verification logos based on json</div>
                </div>
            </div>


        </div>
    )
}