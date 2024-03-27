import './ProductCard.css'

export default function ProductCard(props) {

    return (
        <div className="cardBackground" style={{ backgroundImage: `url( ${props.image} )` }}>
            <div className="cardColorOverlay" >
                <div className="locationDiv">
                    <div className="locationSymbolDiv"></div> {/* gets filled with a background in CSS */}
                    <p>{props.location}</p>
                </div>


                <h3 className="cardTitle">{props.title}</h3>

                <div className="availableAndPriceDiv">
                    <div className="creditsAvailable ">
                        <h4>Credits Available</h4>
                        <div className="numberBox">
                            <p>{props.credits}</p>
                        </div>
                    </div>

                    <div className="price">
                        <h4>Credits Available</h4>
                        <div className="numberBox">
                            <p>{props.price}</p>
                        </div>
                    </div>
                </div>

                <div className="descriptionDiv">
                        <p>{props.description}</p>
                    </div>


                    <div className="ClickSymbolDiv"></div> {/* Also is filled later */}

                






            </div>
        </div>
    )
}