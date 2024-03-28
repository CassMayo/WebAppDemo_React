import "./StatisticCard.css"

export default function StatisticCard(props){
    return(
        <div className="statisticCard">
            <p className="title">{props.title}</p>
            <h3 className="number">{props.number}</h3>
        </div>
    )
}