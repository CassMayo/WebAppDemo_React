import { useContext } from "react"
import { PurchaseContext } from "../../logic/PurchaseContext"
import './Certificate.css'
import CustomLink from '../../Navbar/CustomLink';






export default function Certificate(props) {

    const { purchasedItem } = useContext(PurchaseContext)

    if (purchasedItem.length < 1) {
        return (
            <div className="certificateBody">
                <div className="undefinedBody">
                    <div className="undefinedCard">

                        Something went wrong. <br />Please dont reload as this clears the PurchaseContext used for this demo

                        <CustomLink to={"/portfolio"}>
                            <button className="goBackButton undefinedButton"> <i className="fa-solid fa-arrow-left"></i> Go back</button>
                        </CustomLink>
                    </div>
                </div>
            </div>
        )
    }

    console.log(purchasedItem)
    const item = purchasedItem[0]




    return (
        <div className="certificateBody">

            <div className='exitRow'>
                <CustomLink to={"/portfolio"}>
                    <button className="goBackButton"> <i className="fa-solid fa-arrow-left"></i> Go back</button>
                </CustomLink>
            </div>

            <div className="certificateCard">

                <div className="topRow">
                    <img className="logo" src="./images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" />
                    <h1 className="certTitle">Certificate of Purchase</h1>
                    <div className="totalOffsetBadge">
                        <p>Tons of CO2 offset:</p>
                        <p><b>{item.amount * item.listing.price}</b></p>
                    </div>
                </div>

                <p><b>Certificate ID: M49-KU5-X-C455I</b></p>

                <div className="certBody">

                    <div className="columns">
                        <div className="leftColumn">

                            <div className="companiesInfo">
                                <ul className="clientInfo">
                                    <li>Bought by <b>Your Company</b></li>
                                    <li>[Adress]</li>
                                    <li>[City, state, Zip code]</li>
                                    <li>[Country]</li>
                                </ul>

                                <ul className="sellerInfo">
                                    <li>Credits issued by <b>{item.listing.title}</b></li>
                                    <li>[Adress]</li>
                                    <li>{item.listing.location}</li>
                                    <li>[Country]</li>
                                </ul>
                            </div>

                            <ul className="generalInfo">
                                <li>Date of Purchase: <b>{Date()}</b> </li>
                                <li>Total credits purchased: <b>{item.amount} credits</b> (equal to {item.amount} tons of CO2)</li>
                                <li>Price per credit: <b>${item.listing.price}</b></li>
                                <li>Total purchase amount: <b>${item.amount * item.listing.price}</b></li>
                            </ul>

                            <ul className="projectInfo">
                                <li>Project name: {item.listing.title}</li>
                                <li>Project type: {item.listing.type}</li>
                                <li>Location: {item.listing.location}</li>
                            </ul>

                        </div>
                        <div className="rightColumn">
                            <p>This certificate verifies that Your Company has successfully purchased {item.amount} carbon credits from {item.listing.title}, through Clear Karbon Exchange.</p>
                            <br />
                            <p>The credits have been independently verified by [Verification Company]</p>
                            <p>Date for Verification: [Date for Verification]</p>
                            <div className="verificationLogos">

                            </div>

                            <div className="QR">
                                <img src="./assets/qr_til_example.png" alt="Example QR code. Scan to verify" />
                                <p>Scan to view digital verification</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            Contact Information: <br />
                            support@clearkarbon.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}