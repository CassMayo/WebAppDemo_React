import './ProductCard.css'

export default function ProductCard(props) {

    return (


        <div className='card'>
            <div className="cardBackground" style={{ backgroundImage: `url( ${props.image} )` }}>
                <div className="cardColorOverlay" >
                    <div className="topInfoDiv">

                        <div className='locationDiv'>
                            <svg className="locationSymbol" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                            <p className='locationText'>{props.location}</p>
                        </div>

                        <div className='categoryDiv'>
                            <p className='category'>{props.type}</p>
                        </div>
                    </div>


                    <div className='cardContentDiv'>
                        <h3 className="cardTitle">{props.title}</h3>

                        <div className="availableAndPriceDiv">
                            <div className="creditsAvailable numberBoxTitle">
                                <h4 className='numberBoxTitle'>Credits Available</h4>
                                <div className="numberBox">
                                    <p>{props.credits}</p>
                                </div>
                            </div>

                            <div className="price ">
                                <h4 className='numberBoxTitle'>Credits Available</h4>
                                <div className="numberBox">
                                    <p>{props.price}</p>
                                </div>
                            </div>
                        </div>

                        <div className="descriptionDiv">
                            <p>{props.description}</p>
                        </div>

                        <div className='actionButtonsContainer'>
                            <button className='button mainAction'>Read more <i className="fa-solid fa-arrow-right"></i></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}