import ProductCard from "./ProductCard.jsx/ProductCard"
import "./CardsContentSection.css"

export default function CardsContentSection(){
    
    const image = "./src/assets/imat-bagja-gumilar-jwTvCQQJXh0-unsplash.jpg"
    const imageAlt = "Image of forrest"
    const title = "Keani Lestari"
    const type = "Tree Stored Carbon"
    const credits = "234 744"
    const price = "$ 200"
    const location = "Jakarta"
    const description = "Keani Lestari is a plant operator in Jakarta, Indonesia since 2013. They own and develop land with mixed forests. The company utilizes locally sourced ...."

    const ANTALL_KORT_DEMO = 10

    return (


        <div className="cardsContainer">
            {Array.from({length: ANTALL_KORT_DEMO}).map(() =>
            <ProductCard
                image={image}
                imageAlt={imageAlt}
                title={title}
                type={type}
                credits={credits}
                price={price}
                location={location}
                description={description}
                
            />
            )}
        </div>
    )
}