import "./StatisticCard.css"

export default function StatisticCard(props){


    return(
        <div className="statisticCard">
            <p className="title">{props.title}</p>
            <h3 className="number">{props.number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h3> 
            {/* ^^ Long as RegEx funksjon som formaterer 488332 til 488 332 (altså legger til mellomrom)*/}
        </div>
    )
}